import request from '../utils/api';

export function submitForm(form) {
  let req = { formdata: form };
  return function(dispatch) {
    request('post', '/form/save', req).then(response => {
      if (!response.ok) {
        console.log('error');
      } else {
        dispatch(savedForm(response.body));
      }
    });
  };
}

function savedForm(result) {
  return {
    type: 'FORM_ADDED',
    outcome: result
  };
}
