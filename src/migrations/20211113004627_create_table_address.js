exports.up = function (knex, Promise) {
    return knex.schema.createTable('address', table => {
        table.increments('id').primary()
        table.string('street', 80).notNullable()
        table.string('city', 80).notNullable()
        table.integer('user_id').unsigned()
            .references('id')
            .inTable('users')
            .notNullable().onDelete('CASCADE')
        table.timestamps()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('address')
};
