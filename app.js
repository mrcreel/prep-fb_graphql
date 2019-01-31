const express = require('express')
const bodyParser = require('body-parser')
const graphQlHTTP = require('express-graphql')
const {buildSchema} = require('graphql')
const mongoose = require('mongoose')

const app = express()

const teams = [
  {
    '_id': 'aberdeen',
    'name': 'Aberdeen',
    'url': '/Aberdeen.htm',
    'status': 'active'
  }, {
    '_id': 'adamscountychristian',
    'name': 'Adams County Christian',
    'url': '/Adamscountychristian.htm',
    'status': 'active'
  }, {
    '_id': 'alcorncentral',
    'name': 'Alcorn Central',
    'url': '/Alcorncentral.htm',
    'status': 'active'
  }, {
    '_id': 'amite',
    'name': 'Amite',
    'url': '/Amite.htm',
    'status': 'active'
  }
]

app.use(bodyParser.json())

app.use(
  '/graphql',
  graphQlHTTP({
    schema: buildSchema(`
      type Team {
        _id: ID!
        name: String!
        url: String!
        status: String!
      }
      type RootQuery {
        teams: [Team!]!
      }
      schema {
        query: RootQuery
      }
    `),
    rootValue: {
      teams: () => {
        return teams
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



