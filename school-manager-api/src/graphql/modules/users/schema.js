export default `
type User {
  name: String!
  email: String!
  active: Boolean!
  role: Role!
}

type Query {
  users: [User!]!
  user(id: ID!): User!
}

type Mutation{
  addUser(name: String!, email: String!, active: Boolean!, role: Int!): User!
  updateUser(id: ID!, name: String, email: String, active: Boolean, role: Int): User!
  deleteUser(id: ID!): ID
}

`;
