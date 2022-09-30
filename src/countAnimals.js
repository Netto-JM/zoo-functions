const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const filteredSpecies = species.filter((zooAnml) => !(animal) || zooAnml.name === animal.specie);
  const getAnimalsCount = (acc, curr) => {
    const genderFilter = (resident) => !(animal && animal.sex) || animal.sex === resident.sex;
    const filteredResidents = curr.residents.filter(genderFilter);
    acc[curr.name] = filteredResidents.length;
    return acc;
  };
  const animalsCount = filteredSpecies.reduce(getAnimalsCount, {});
  if (animal) return Object.values(animalsCount)[0];
  return animalsCount;
}

module.exports = countAnimals;
