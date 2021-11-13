const resolvers = require ('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

/**
 * Definindo tipos
 * * type User Objeto
 * * type Query Consultas
 * * type input para as mutations
 * * type mutations executa as funções para alateração dos dados
 * ! Exclamção informar que o campo é obrigatório
 * ! Usando a interpolação para evitar a replicação ${usersAttribs}
 **/

const usersAttribs = `
    id: ID
    name: String!
    email: String!
    password: String!
`
const addressAttribs = `
    street: String!
    city: String!
    user_id: Int
`
const typeDefs = `
    type User {
        ${usersAttribs}
        ${addressAttribs}
    }

    type Address {
        id: ID
        ${addressAttribs}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
        getAddress(id: ID!): Address
    }

    input UserInput {
        ${usersAttribs}
    }

    input AddressInput {
        id: ID
        ${addressAttribs}
    }

    input UserAddressInput {
        ${usersAttribs}
        ${addressAttribs}
    }

    type Mutation {
        createUser(input: UserInput): User
        createAddress(input: AddressInput): Address
        createUserAddress (input: UserAddressInput): User
    }
`
module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})
