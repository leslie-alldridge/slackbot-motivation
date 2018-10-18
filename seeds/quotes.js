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
        },
        {
          id: 8,
          quote:
            'Stay happy, stay humble!'
        },
        {
          id: 9,
          quote:
            'The seeds of destruction lie in the roots of comparison.'
        },
        {
          id: 10,
          quote:
            'Define your normal.'
        },
        {
          id: 11,
          quote:
            'What is uncomfortable now, will become comfortable later.'
        },
        {
          id: 12,
          quote:
            'Success isn’t found at the destination, but rather in the journey.'
        },
        {
          id: 13,
          quote:
            'Great things have never come from the comfort zone.'
        },
        {
          id: 14,
          quote:
            'The past doesn’t determine the future.'
        },
        {
          id: 15,
          quote:
            'Every day may not be good, but there is good in every day.'
        }
      ]);
    });
};
