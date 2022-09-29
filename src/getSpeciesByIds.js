const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const filteredSpeciesById = data.species.filter((spc) => ids.includes(spc.id));
  return filteredSpeciesById;
}

module.exports = getSpeciesByIds;
