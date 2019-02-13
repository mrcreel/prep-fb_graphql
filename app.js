const express = require('express')
const bodyParser = require('body-parser')
const graphQlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const schema = require('./graphql/schema/index')
const resolvers = require('./graphql/resolvers/index')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use(
  '/graphql',
  graphQlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

// app.listen(8000)

mongoose.connect(
  'mongodb+srv://michael:stretch@cluster0-dxekj.mongodb.net/prep-football?retryWrites=true',
  {useNewUrlParser: true}
).then(() => {
  app.listen(8000)
}).catch(err => {
  // eslint-disable-next-line no-console
  console.log('Connection failed!', err)
})