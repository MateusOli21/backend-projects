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

type Mutation{
    addClass(teacher_id: Int!, vacancies: Int!, description: String!): Class!
    updateClass(id: ID!, teacher_id: Int, vacancies: Int, description: String): Class!
    deleteClass(id: ID!): ID
}

`;
