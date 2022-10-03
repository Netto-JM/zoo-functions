const { species: zooSpecies, employees } = require('../data/zoo_data');

function getLocationsBySpeciesNames(speciesNames) {
  const locations = [];
  const speciesInfo = zooSpecies.filter((zooAnimal) => speciesNames.includes(zooAnimal.name));
  speciesInfo.forEach((animal) => locations.push(animal.location));
  return locations;
}

function getEmployeeCoverage(employeeInfo, id) {
  const fullName = `${employeeInfo.firstName} ${employeeInfo.lastName}`;
  const getSpeciesNameById = (animalId) => zooSpecies.find((animal) => animalId === animal.id).name;
  const species = employeeInfo.responsibleFor.map((animalId) => getSpeciesNameById(animalId));
  const locations = getLocationsBySpeciesNames(species);
  return { id, fullName, species, locations };
}

function getEmployeeCoverageById(id) {
  const employeeInfo = employees.find((employee) => employee.id === id);
  if (!(employeeInfo)) throw new Error('Informações inválidas');
  return getEmployeeCoverage(employeeInfo, id);
}

function getEmployeeCoverageByName(name) {
  const findEmployeeByName = (employee) => [employee.firstName, employee.lastName].includes(name);
  const employeeInfo = employees.find(findEmployeeByName);
  if (!(employeeInfo)) throw new Error('Informações inválidas');
  return getEmployeeCoverage(employeeInfo, employeeInfo.id);
}

function getAllEmployeesCoverage() {
  const allEmployeesCoverage = employees.map((employee) => getEmployeeCoverageById(employee.id));
  return allEmployeesCoverage;
}

function getEmployeesCoverage(parameters) {
  if (typeof parameters === 'undefined') return getAllEmployeesCoverage();
  const { name, id } = parameters;
  if (name) return getEmployeeCoverageByName(name);
  if (id) return getEmployeeCoverageById(id);
}

module.exports = getEmployeesCoverage;
