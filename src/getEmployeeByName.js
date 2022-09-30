const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const findEmployeeByName = (employeeInfo) => (
    [employeeInfo.firstName, employeeInfo.lastName].includes(employeeName)
  );
  const employeeInfo = employees.find(findEmployeeByName) || {};
  return employeeInfo;
}

module.exports = getEmployeeByName;
