const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const knex = require('knex')(config);

function getMotivation(testDb) {
  const connection = testDb || knex;
  return connection('motivation').select();
}

function getTeamMotivation(testDb) {
  const connection = testDb || knex;
  return connection('team').select();
}

function getWellbeingMotivation(testDb) {
  const connection = testDb || knex;
  return connection('wellbeing').select();
}

module.exports = {
  getMotivation,
  getTeamMotivation,
  getWellbeingMotivation
};
