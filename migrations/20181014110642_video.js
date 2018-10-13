exports.up = knex =>
  knex.schema.createTable('videos', table => {
    table.increments('id').primary();
    table.string('snippet');
    table.string('video');
  });

exports.down = knex => knex.schema.dropTable('videos');
