exports.seed = function(knex, Promise) {
  return knex('team')
    .del()
    .then(function() {
      return knex('team').insert([
        {
          id: 1,
          quote: 'Alone we can do so little, together we can do so much.'
        },
        {
          id: 2,
          quote:
            'Coming together is a beginning. Keeping together is progress. Working together is success.'
        },
        {
          id: 3,
          quote:
            'The strength of the team is each individual member. The strength of each member is the team.'
        }
      ]);
    });
};
