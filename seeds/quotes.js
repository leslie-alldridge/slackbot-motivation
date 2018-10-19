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
          quote: 'A person without a smiling face must not open a shop.'
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
        },
        {
          id: 26,
          quote:
            'Even a dead fish can float down stream, it takes a live one to go in the opposite direction.'
        },
        {
          id: 27,
          quote: 'Attract good people by being a good person.'
        },
        {
          id: 28,
          quote: 'Be transparent, be the same person 100% of the time.'
        },
        {
          id: 29,
          quote: 'Does your commitment live up to your dream.'
        },
        {
          id: 30,
          quote: 'How you think, is how you live.'
        },
        {
          id: 31,
          quote: 'Fear is a motivator not a captor.'
        },
        {
          id: 32,
          quote: 'Honesty leads to trust.'
        },
        {
          id: 33,
          quote: 'There is no “LOSE” only “WIN” or “LEARN”.'
        },
        {
          id: 34,
          quote: 'Self value - who are you? Not what do you do?'
        },
        {
          id: 35,
          quote: 'No body but you, writes the last chapter of your story.'
        },
        {
          id: 36,
          quote: 'Is it your best or your excuse.'
        },
        {
          id: 37,
          quote: 'The words we speak, create the world we live in.'
        },
        {
          id: 38,
          quote:
            'A teacher will tell you what they know, a leader will show you what they know.'
        },
        {
          id: 39,
          quote:
            'Are you willing to reduce your dream in life to the level of your fears.'
        },
        {
          id: 40,
          quote: 'The use of your life should outlast your life.'
        },
        {
          id: 41,
          quote: 'Doesn’t matter, get better.'
        },
        {
          id: 42,
          quote: 'The world is changed by your actions, not your opinions.'
        },
        {
          id: 43,
          quote: 'Values are displayed in action.'
        },
        {
          id: 44,
          quote:
            'There are only two things one can control. Their attitude and their actions.'
        },
        {
          id: 45,
          quote: 'Aim to provide value in every interaction.'
        },
        {
          id: 46,
          quote: 'You are important.'
        },
        {
          id: 47,
          quote: 'Display interest over intelligence.'
        },
        {
          id: 48,
          quote: 'The squeaky wheel gets the oil.'
        },
        {
          id: 49,
          quote: 'Learning is a journey not an event.'
        },
        {
          id: 50,
          quote: 'You are a #champion.'
        },
        {
          id: 51,
          quote: 'You are #beautiful.'
        },
        {
          id: 52,
          quote: 'You are #human.'
        },
        {
          id: 53,
          quote: 'You will overcome the #challenge.'
        },
        {
          id: 54,
          quote: 'See it through to the end #ownership.'
        }
      ]);
    });
};
