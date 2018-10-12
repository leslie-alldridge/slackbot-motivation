exports.seed = function(knex, Promise) {
    return knex('images')
      .del()
      .then(function() {
        return knex('images').insert([
          {
            id: 1,
            quote: 'https://i.imgur.com/wynRUEp.jpg'
          },
          {
            id: 2,
            quote:
              'https://i.imgur.com/0Ch3kaD.jpg'
          },
          {
            id: 3,
            quote:
              'https://i.imgur.com/8FRAsML.jpg'
          }
        ]);
      });
  };
  