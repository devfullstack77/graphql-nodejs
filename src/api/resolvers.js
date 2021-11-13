const res = require("express/lib/response");
const db = require("../config/database");

module.exports = {

    Query: {
        async getUser(_, { id }) {
            return await db('users')
                .leftOuterJoin('address', 'users.id', 'address.user_id')
                .where({ "users.id": id }).first()

        },
        async getUsers(_, { offset, limit }) {
            return await db('users').leftOuterJoin('address', 'users.id', 'address.user_id')
        },
        async getAddress(_, { id }) {
            return await db('address').where({ id }).first()
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })
            return await db('users').where({ id: result[0] }).first()
        },
        async createAddress(_, { input }) {
            const result = await db('address').insert({
                street: input.street,
                city: input.city,
                user_id: input.user_id
            })
            return await db('address').where({ id: result[0] }).first()
        },

        async createUserAddress(_, { input }) {
            try {
               const result =  await db.transaction(async trx => {
                    const user_id = await trx('users').insert({
                        name: input.name,
                        email: input.email,
                        password: input.password
                    }, 'id')

                    const address = await trx('address').insert({
                        street: input.street,
                        city: input.city,
                        user_id:  user_id
                    }, 'street')
                })

                console.log(result)
                return result

            } catch (error) {
                // If we get here, that means that neither the 'Old Books' catalogues insert,
                // nor any of the books inserts will have taken place.
                console.error(error);
            }

        }

    }

}
