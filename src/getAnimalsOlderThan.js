const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const residentsInfo = species.find((spc) => spc.name === animal).residents;
  const areOlderAnimals = residentsInfo.every((zooAnimal) => zooAnimal.age >= age);
  return areOlderAnimals;
}

module.exports = getAnimalsOlderThan;
