import * as functions from 'firebase-functions';
import React from 'react';

import express from 'express';

const app = express();

// app.get('/index', (req, res) => {
//   require('./src/routes/index').default;
// });
app.use('/index', require('./src/routes/index'));
app.use('/aktiviteter', require('./src/routes/activities'));



export let ssrapp = functions.https.onRequest(app);