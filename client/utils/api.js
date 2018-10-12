import request from 'superagent';

(function wakeup() {
  request.get('https://young-springs-47463.herokuapp.com/help').then(res => {
    console.log('Woke up!');
    setTimeout(wakeup, 1740000); //29m
  });
})();

const baseUrl = '/api/v1';

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' ? 'query' : 'send';
  const headers = {
    Accept: 'application/json'
  };

  return request[method](baseUrl + endpoint)
    .set(headers)
    [dataMethod](data)
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err;
    });
}
