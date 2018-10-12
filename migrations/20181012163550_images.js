exports.up = knex =>
  knex.schema.createTable('images', table => {
    table.increments('id').primary();
    table.string('quote');
  });

exports.down = knex => knex.schema.dropTable('images');
