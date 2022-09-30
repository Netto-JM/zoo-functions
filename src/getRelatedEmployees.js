const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  for (let index = 0; index < employees.length; index += 1) {
    if (employees[index].managers.includes(id)) return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managerTeam = employees.filter((employee) => employee.managers.includes(managerId));
    const teamNames = managerTeam.map((employee) => `${employee.firstName} ${employee.lastName}`);
    return teamNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
