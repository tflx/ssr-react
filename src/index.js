import React from 'react';
import {hydrate} from 'react-dom';
import App from './App'
import fetch from 'isomorphic-fetch';

// fetch('https://ssr-react.firebaseio.com/facts.json')
// .then(response => {
//   response.json().then(json => {
//     hydrate(<App facts={json} />, document.querySelector('#root'));
//   })
// });
hydrate(<App />, document.querySelector('#root'));