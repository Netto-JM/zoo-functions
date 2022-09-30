const { species, hours } = require('../data/zoo_data');

const getAnimalAvailability = (animal) => (
  species.find((zooAnimal) => animal === zooAnimal.name).availability
);

function getSchedule(scheduleTarget) {
  return getAnimalAvailability(scheduleTarget);
}

module.exports = getSchedule;
