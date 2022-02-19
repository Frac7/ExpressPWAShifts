const cron = require('node-cron');
const webPush = require('web-push');

const data = require('../data');
const { trash: trashItems, street: streetItems } = data;

const cache = require('../cache');

const initNotificationJob = () => {
  // Running a task every day
  cron.schedule('* * *', async () => {
    const subscription = '';

    const dayOfTheWeek = new Date(date).getDay();

    const trash = trashItems[dayOfTheWeek];
    const street = streetItems[dayOfTheWeek];

    const payload = JSON.stringify({ trash, street }); // TODO: check if this API accepts JSON
    const ttl = 60 * 60 * 24;

    cache.forEach(() =>
      webPush.sendNotification(subscription, payload, { ttl }),
    );
  });
};

module.exports = { initNotificationJob };
