const TABLE_NAME = 'movies'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('title').notNullable()
    table.integer('year').notNullable()
    table.string('director').notNullable()
    table.integer('rating').notNullable().defaultsTo(0)
    table.text('url').notNullable()

    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
