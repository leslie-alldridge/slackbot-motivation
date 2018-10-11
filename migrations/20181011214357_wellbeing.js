exports.up = knex =>
  knex.schema.createTable('wellbeing', table => {
    table.increments('id').primary();
    table.string('quote');
  });

exports.down = knex => knex.schema.dropTable('wellbeing');
