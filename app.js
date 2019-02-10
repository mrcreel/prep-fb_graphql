const express = require('express')
const bodyParser = require('body-parser')
const graphQlHTTP = require('express-graphql')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')

const schema = require('./graphql/schema/index')
const resolvers = require('./graphql/resolvers/index')

const app = express()

app.use(bodyParser.json())

app.use(
  '/graphql',
  graphQlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

app.listen(8000)
/*
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-dxekj.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
  {useNewUrlParser: true}
).then(() => {
  app.listen(3000)
}).catch(err => {
  throw err
})
 */