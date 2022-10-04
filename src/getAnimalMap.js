const { species } = require('../data/zoo_data');

function getAllAnimals() {
  const allAnimals = {};
  species.forEach((zooAnimal) => {
    if (!(allAnimals[zooAnimal.location])) allAnimals[zooAnimal.location] = [];
    allAnimals[zooAnimal.location].push(zooAnimal.name);
  });
  return allAnimals;
}

function getAnimalNames(animal, sex, isSorted) {
  const animalResidents = species.find((zooAnimal) => zooAnimal.name === animal).residents;
  const filteredResidents = animalResidents.filter((resident) => !(sex) || resident.sex === sex);
  const names = filteredResidents.map((resident) => resident.name);
  if (isSorted) names.sort();
  return { [animal]: names };
}

function getAnimalsAndNames(sex, isSorted) {
  const animalsAndNames = getAllAnimals();
  const getNames = (animal) => getAnimalNames(animal, sex, isSorted);
  Object.keys((animalsAndNames)).forEach((region) => {
    animalsAndNames[region] = animalsAndNames[region].map(getNames);
  });
  return animalsAndNames;
}

function getAnimalMap(options) {
  if ((options) && (options.includeNames)) return getAnimalsAndNames(options.sex, options.sorted);
  return getAllAnimals();
}

module.exports = getAnimalMap;
