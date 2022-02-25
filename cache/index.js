const subscriptions = [];

const getSubscriptionByEndpoint = (subscriptionEndpoint) =>
  subscriptions.find(({ endpoint }) => endpoint === subscriptionEndpoint);

module.exports = {
  subscriptions,
  getSubscriptionByEndpoint,
};
