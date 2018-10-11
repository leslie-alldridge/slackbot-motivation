exports.up = knex =>
  knex.schema.createTable('team', table => {
    table.increments('id').primary();
    table.string('quote');
  });

exports.down = knex => knex.schema.dropTable('team');
