var express = require('express');
var router = express.Router();
import React from 'react';
import fetch from 'isomorphic-fetch';
import {renderToString} from 'react-dom/server';
import App from '../App'
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');
/* GET home page. */
router.get('/', function(req, res, next) {
  let html = renderToString(<App />);
  const finalhtml = index.replace('<!-- ::APP:: -->', html);
  // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(finalhtml);
});

module.exports = router;