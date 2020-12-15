export default `

type Class{
    id: ID!
    teacher: User!
    vacancies: Int!
    description: String!
    schedule: String
}

type Query{
    classes: [Class!]
    class(id: ID!): Class
}

`;
