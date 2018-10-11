exports.seed = function(knex, Promise) {
  return knex('motivation')
    .del()
    .then(function() {
      return knex('motivation').insert([
        { id: 1, quote: "Rome wasn't built in a day" },
        { id: 2, quote: "We're all in this together" },
        { id: 3, quote: 'Xero is beatiful, just like you!' }
      ]);
    });
};
