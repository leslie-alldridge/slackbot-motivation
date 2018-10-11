exports.up = knex =>
  knex.schema.createTable('motivation', table => {
    table.increments('id').primary();
    table.string('quote');
  });

exports.down = knex => knex.schema.dropTable('motivation');
