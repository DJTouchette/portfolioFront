import 'whatwg-fetch';

function makeInit(method, body) {
  const init = {
    method: method,
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  return init;
}

function postFetch(url, body) {
  const json = fetch(url, makeInit('POST', body))
    .then((res) =>{
      return res.json();
    });

  return json;
}

export default postFetch;