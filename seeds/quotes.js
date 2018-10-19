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
          quote: 'Stay happy, stay humble!'
        },
        {
          id: 9,
          quote: 'The seeds of destruction lie in the roots of comparison.'
        },
        {
          id: 10,
          quote: 'Define your normal.'
        },
        {
          id: 11,
          quote: 'What is uncomfortable now, will become comfortable later.'
        },
        {
          id: 12,
          quote:
            'Success isn’t found at the destination, but rather in the journey.'
        },
        {
          id: 13,
          quote: 'Great things have never come from the comfort zone.'
        },
        {
          id: 14,
          quote: 'The past doesn’t determine the future.'
        },
        {
          id: 15,
          quote: 'Every day may not be good, but there is good in every day.'
        },
        {
          id: 16,
          quote:
            'If you want something you’ve never had, you must do something you’ve never done.'
        },
        {
          id: 17,
          quote: 'Comparison is the destruction of joy.'
        },
        {
          id: 18,
          quote:
            'Perseverance is the hard work you do after you get tired of doing the hard work you have already done ~ Newt Gingrich'
        },
        {
          id: 19,
          quote: 'If opportunity doesn’t knock, build a door.'
        },
        {
          id: 20,
          quote: 'Life’s not a game meant to be played by others rules.'
        },
        {
          id: 21,
          quote: 'A man without a smiling face must not open a shop.'
        },
        {
          id: 22,
          quote: 'You are what you speak.'
        },
        {
          id: 23,
          quote: 'Ones actions are the window to ones valuers.'
        },
        {
          id: 24,
          quote:
            'Be thankful for who you are today, while working hard for who you want to be tomorrow.'
        },
        {
          id: 25,
          quote: 'The world is changed by your example not by your opinion.'
        }
      ]);
    });
};
