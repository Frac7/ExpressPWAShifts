const data = require('../data');
const { trash: trashItems, street: streetItems } = data;

const getShift = (req, res) => {
  const { date } = req.query;
  const dayOfTheWeek = new Date(date).getDay();

  const trash = trashItems[dayOfTheWeek];
  const street = streetItems[dayOfTheWeek];

  res.json({ trash, street });
};

module.exports = { getShift };
