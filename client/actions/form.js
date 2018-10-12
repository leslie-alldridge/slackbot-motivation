import request from '../utils/api';

export function submitForm(form) {
  let req = { formdata: form };
  return function(dispatch) {
    request('post', '/form/save', req).then(response => {
      if (!response.ok) {
        console.log('error');
      } else {
        console.log(response);
        // dispatch(receiveAddBag(user, response.body.bag));
      }
    });
  };
}
