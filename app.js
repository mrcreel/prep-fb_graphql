const express = require('express')
const bodyParser = require('body-parser')
const graphQlHTTP = require('express-graphql')
const {buildSchema} = require('graphql')
const mongoose = require('mongoose')

const Team =  require('./models/team')

const app = express()

/*
const teams = [
  {
    'slug': 'aberdeen',
    'name': 'Aberdeen',
    'url': '/Aberdeen.htm',
    'status': '/Aberdeen.htm'
  }, {
    'slug': 'adamscountychristian',
    'name': 'Adams County Christian',
    'url': '/Adamscountychristian.htm',
    'status': 'active'
  }, {
    'slug': 'alcorncentral',
    'name': 'Alcorn Central',
    'url': '/Alcorncentral.htm',
    'status': 'active'
  }, {
    'slug': 'amite',
    'name': 'Amite',
    'url': '/Amite.htm',
    'status': 'active'
  }
]
*/

app.use(bodyParser.json())

app.use(
  '/graphql',
  graphQlHTTP({
    schema: buildSchema(`
      type Team {
        _id: ID!
        slug: String
        name: String!
        url: String
        status: String!
      }
      input TeamInput {
        slug: String
        name: String!
        url: String
        status: String!
      }
      type RootQuery {
        teams: [Team!]!
      }
      type RootMutation {
        createTeam(teamInput:TeamInput): Team
      }
      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {
      teams: () => {
        return Team.find()
        .then(teams => {
          return teams.map(team => {
            return {...team._doc, _id: team.id}
          })
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
          throw err
        })
      },
      createTeam: (args) => {
        const team = new Team({
          slug: args.teamInput.slug,
          name: args.teamInput.name,
          url: args.teamInput.url,
          status: args.teamInput.status,
        })
        return team
          .save()
          .then(result => {
          // eslint-disable-next-line no-console
          console.log(result)
          return {...result._doc, _id: result._doc._id.toString()}
        }).catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
          throw err
        })
        return team
      }
    },
    graphiql: true,
  })
)

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-dxekj.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
  {useNewUrlParser: true}
).then(() => {
  app.listen(3000)
}).catch(err => {
  // eslint-disable-next-line no-console
  console.log(err)
})