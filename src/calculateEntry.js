const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!(entrants) || Object.entries(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const totalPrice = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
