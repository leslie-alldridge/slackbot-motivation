const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const knex = require('knex')(config);

function getMotivation(testDb) {
  const connection = testDb || knex;
  return connection('motivation')
    .select()
    .first();
}

module.exports = {
  getMotivation
};
