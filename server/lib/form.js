const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[environment];
const knex = require('knex')(config);

function saveForm(form, testDb) {
  const connection = testDb || knex;
  return connection('motivation')
    .insert({
      quote: form.formdata
    })
    .then(cb => {});
}

module.exports = {
  saveForm
};
