const cron = require('node-cron');
const webPush = require('web-push');

const data = require('../data');
const { trash: trashItems, street: streetItems } = data;

const cache = require('../cache');

const initNotificationJob = () => {
  // Running a task every day
  cron.schedule('0 0 8 * * *', async () => {
    const dayOfTheWeek = new Date().getDay();

    const trash = trashItems[dayOfTheWeek];
    const street = streetItems[dayOfTheWeek];

    const payload = JSON.stringify({ trash, street });
    const TTL = 60 * 60 * 24;

    cache.subscriptions.forEach((subscription) =>
      webPush.sendNotification(subscription, payload, { TTL }),
    );
  });
};

module.exports = { initNotificationJob };
