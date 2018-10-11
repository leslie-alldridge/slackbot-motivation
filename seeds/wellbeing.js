exports.seed = function(knex, Promise) {
  return knex('wellbeing')
    .del()
    .then(function() {
      return knex('wellbeing').insert([
        {
          id: 1,
          quote:
            'Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.'
        },
        {
          id: 2,
          quote:
            'Discouragement and failure are two of the surest stepping stones to success.'
        },
        { id: 3, quote: 'Once you choose hope, anything’s possible.' }
      ]);
    });
};
