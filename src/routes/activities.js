var express = require('express');
var router = express.Router();
import React from 'react';
import fetch from 'isomorphic-fetch';
import {renderToString} from 'react-dom/server';
import fs from 'fs';
import Activities from '../components/Activities/Activities'

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');
/* GET home page. */
router.get('/', function(req, res, next) {
  fetch('https://ssr-react.firebaseio.com/facts.json')
  .then(response => {
    response.json().then(json => {
      let html = renderToString(<Activities facts={json} />);
      const finalhtml = index.replace('<!-- ::APP:: -->', html);
      // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
      res.send(finalhtml);
    });
  });
});

module.exports = router;