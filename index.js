require('dotenv').config();
const webPush = require('web-push');
// Important: Generate and store public and private keys for the PWA subscription before running this statement
// For generating keys: webPush.generateVAPIDKeys()
webPush.setVapidDetails(
  'https://serviceworke.rs/',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);

const { initNotificationJob } = require('./job');
initNotificationJob();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const { getShift, getPublicKey, postSubscription } = require('./routes');
app.get('/', getShift);
// Public key needed for encription:
// "From the server-side, the whole process has to be encrypted with public and private keys for security reasons
// - allowing everyone to send push messages unsecured using your app would be a terrible idea."
// https://jrconlin.github.io/WebPushDataTestPage/
app.get('/public-key', getPublicKey);
// Subscription details sent from the client
app.post('/subscription', postSubscription);

app.listen(process.env.PORT);
