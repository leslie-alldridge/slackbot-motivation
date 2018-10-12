exports.seed = function(knex, Promise) {
  return knex('motivation')
    .del()
    .then(function() {
      return knex('motivation').insert([
        {
          id: 1,
          quote:
            'In good teams the coach holds players accountable. In great teams the players hold each other accountable'
        },
        {
          id: 2,
          quote: 'Motivation gets you going, but dedication keeps you going'
        },
        { id: 3, quote: 'Your actions are the window to your values' },
        {
          id: 4,
          quote: 'Optimism is the faith that leads to achievement'
        },
        {
          id: 5,
          quote:
            'What a person has done with their life is history, but what a person creates with their life is a legacy'
        },
        {
          id: 6,
          quote: "It always seems impossible until it's done."
        },
        {
          id: 7,
          quote:
            'Failure will never overtake me if my determination to succeed is strong enough.'
        }
      ]);
    });
};
