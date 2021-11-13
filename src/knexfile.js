// Update with your config settings.

const { password } = require('./.env')

module.exports = {

  client: 'mysql',
  connection: {
    database: 'graphql',
    user: 'root',
    password: password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}


/**
 * * Formato original do arquivo quando, permitindo ter varias conexões
 * module.exports = {
 * development: {
 *   client: 'sqlite3',
 *   connection: {
 *     filename: './dev.sqlite3'
 *   }
 * },
 * staging: {
 *   client: 'postgresql',
 *   connection: {
 *     database: 'my_db',
 *     user: 'username',
 *     password: 'password'
 *   },
 *   pool: {
 *     min: 2,
 *     max: 10
 *   },
 *   migrations: {
 *     tableName: 'knex_migrations'
 *   }
 * },
 * production: {
 *   client: 'postgresql',
 *   connection: {
 *     database: 'my_db',
 *     user: 'username',
 *     password: 'password'
 *   },
 *   pool: {
 *     min: 2,
 *     max: 10
 *   },
 *   migrations: {
 *     tableName: 'knex_migrations'
 *   }
 * }
 * };
 *
 *
 **/
