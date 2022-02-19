require('dotenv').config();
const webPush = require('web-push');

// Important: Generate public and private keys for the PWA subscription before running this statement
webPush.setVapidDetails(
  'https://serviceworke.rs/',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const { getShift, getPublicKey, postSubscription } = require('./routes');
app.get('/', getShift);
app.get('/public-key', getPublicKey);
app.post('/subscription', postSubscription);

app.listen(process.env.PORT);
