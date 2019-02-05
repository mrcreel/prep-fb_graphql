const {buildSchema} = require('graphql')

module.exports = buildSchema(`
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
`)