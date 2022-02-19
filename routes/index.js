const data = require('../data');
const { trash: trashItems, street: streetItems } = data;

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
  // TODO: store information
  res.sendStatus(200);
};

module.exports = { getShift, getPublicKey, postSubscription };
