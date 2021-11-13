const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')

/**
 * graphiql aplicação visual para testar as consultas
 * ! criando middleware para o graphql
 */
 const app = express()
 app.use('/api', graphqlHTTP({
     schema,
     graphiql: true
 }))

app.listen(4000, () =>
    console.log(`Api on... http://localhost:4000/api`)
)
