exports.seed = function(knex, Promise) {
  return knex('videos')
    .del()
    .then(function() {
      return knex('videos').insert([
        {
          id: 1,
          snippet: 'Wake up and win the day.',
          video: 'https://www.youtube.com/watch?v=1sgLxp6r2OE'
        },
        {
          id: 2,
          snippet: 'How successful people think.',
          video: 'https://www.youtube.com/watch?v=zCyB2DQFdA0'
        },
        {
          id: 3,
          snippet: 'Believe in yourself.',
          video: 'https://www.youtube.com/watch?v=AjZ0KbJcav0'
        }
      ]);
    });
};
