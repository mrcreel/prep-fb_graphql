const express = require('express')
const bodyParser = require('body-parser')
const graphQlHTTP = require('express-graphql')
const {buildSchema} = require('graphql')

const app = express()

app.use(bodyParser.json())

app.use(
  '/graphql',
  graphQlHTTP({
    schema: buildSchema(`
      type RootQuery {
        teams: [String!]
      }
      schema{
        query: RootQuery
      }
    `),
    rootValue: {
      teams: () => {
        return ['Aberdeen', 'Adams County Christian', 'Amite']
      }
    },
    graphiql: true,
  })
)

app.listen(3000)
