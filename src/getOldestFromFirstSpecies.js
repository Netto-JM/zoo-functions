const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((employeeInfo) => employeeInfo.id === id);
  const firstSpeciesId = employee.responsibleFor[0];
  const speciesResidents = species.find((animal) => animal.id === firstSpeciesId).residents;
  const residentAges = speciesResidents.map((resident) => resident.age);
  const maxAge = Math.max(...residentAges);
  const oldestResident = speciesResidents.find((resident) => resident.age === maxAge);
  return Object.values(oldestResident);
}

module.exports = getOldestFromFirstSpecies;
