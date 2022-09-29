const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const residentsInfo = data.species.find((spc) => spc.name === animal).residents;
  const areOlderAnimals = residentsInfo.every((zooAnimal) => zooAnimal.age >= age);
  return areOlderAnimals;
}

module.exports = getAnimalsOlderThan;
