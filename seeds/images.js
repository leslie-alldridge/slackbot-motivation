exports.seed = function(knex, Promise) {
  return knex('images')
    .del()
    .then(function() {
      return knex('images').insert([
        {
          id: 1,
          quote:
            'http://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2015/12/04093022/make-your-life-a-masterpiece-brian-tracy-motivational-quotes.png'
        },
        {
          id: 2,
          quote:
            'https://lh3.googleusercontent.com/_nHTtdXnlGom0BXOODzjcJI44pCvLVSFAFldXWTc1RCVDi9jjtvlpYmqeCF8eATT5-7AjBb4K3eAJA=w1366-h768-rw-no'
        },
        {
          id: 3,
          quote:
            'http://www.ais-cpa.com/wp-content/uploads/2017/04/cpa-exam-motivational-quotes-284x300.jpg'
        }
      ]);
    });
};
