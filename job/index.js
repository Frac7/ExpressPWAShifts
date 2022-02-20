const cron = require('node-cron');
const webPush = require('web-push');

const data = require('../data');
const { trash: trashItems, street: streetItems } = data;

const cache = require('../cache');

const initNotificationJob = () => {
  // Running a task every day
  cron.schedule('0 1 * * *', async () => {
    const dayOfTheWeek = new Date().getDay();

    const trash = trashItems[dayOfTheWeek];
    const street = streetItems[dayOfTheWeek];

    const payload = JSON.stringify({ trash, street }); // TODO: check if this API accepts JSON
    const TTL = 60 * 60 * 24;

    cache.forEach((subscription) =>
      webPush.sendNotification(subscription, payload, { TTL }),
    );
  });
};

module.exports = { initNotificationJob };
