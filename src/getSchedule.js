const { species, hours } = require('../data/zoo_data');

const getFormattedOfficeHour = ({ open, close }) => `Open from ${open}am until ${close}pm`;

const getExibitionByDay = (day) => {
  const filteredSpeciesByDay = species.filter((zooAnimal) => zooAnimal.availability.includes(day));
  const exibitedAnimals = filteredSpeciesByDay.map((zooAnimal) => zooAnimal.name);
  return exibitedAnimals;
};

const getDaySchedule = (day) => {
  if (day === 'Monday') return { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };
  const officeHour = getFormattedOfficeHour(hours[day]);
  const exhibition = getExibitionByDay(day);
  return { officeHour, exhibition };
};

const getWeekSchedule = () => {
  const weekSchedule = {};
  Object.keys(hours).forEach((day) => { weekSchedule[day] = getDaySchedule(day); });
  return weekSchedule;
};

const isADay = (argument) => Object.keys(hours).includes(argument);
const isAnAnimal = (argument) => species.map((zooAnimal) => zooAnimal.name).includes(argument);
const isValidArgument = (argument) => isADay(argument) || isAnAnimal(argument);

function getSchedule(scheduleTarget) {
  if (!isValidArgument(scheduleTarget)) return getWeekSchedule();
  if (isADay(scheduleTarget)) return { [scheduleTarget]: getDaySchedule(scheduleTarget) };
  return species.find((animal) => scheduleTarget === animal.name).availability;
}

module.exports = getSchedule;
