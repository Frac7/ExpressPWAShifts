const data = require('../data');
const { trash: trashItems, street: streetItems } = data;

const cache = require('../cache');

const getShift = (req, res) => {
  const { date } = req.query;
  const dayOfTheWeek = new Date(date).getDay();

  const trash = trashItems[dayOfTheWeek];
  const street = streetItems[dayOfTheWeek];

  res.json({ trash, street });
};

const getPublicKey = (_, res) => {
  res.json({ publicKey: process.env.VAPID_PUBLIC_KEY });
};

const postSubscription = (req, res) => {
  const { subscription } = req.body;
  if (!cache.getSubscriptionByEndpoint(subscription.endpoint)) {
    cache.subscriptions.push(subscription);
  }
  res.sendStatus(200);
};

module.exports = { getShift, getPublicKey, postSubscription };
