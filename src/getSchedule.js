const { species, hours } = require('../data/zoo_data');

const getAnimalAvailability = (animal) => (
  species.find((zooAnimal) => animal === zooAnimal.name).availability
);

const getFormattedOfficeHour = ({ open, close }) => `Open from ${open}am until ${close}pm`;

const getExibitionByDay = (day) => {
  const filteredSpeciesByDay = species.filter((zooAnimal) => zooAnimal.availability.includes(day));
  const exibitedAnimals = filteredSpeciesByDay.map((zooAnimal) => zooAnimal.name);
  return exibitedAnimals;
};

const mondayAlert = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };

const getDaySchedule = (day) => {
  if (day === 'Monday') return mondayAlert;
  const officeHour = getFormattedOfficeHour(hours[day]);
  const exhibition = getExibitionByDay(day);
  return { officeHour, exhibition };
};

const getAllSchedule = () => {
  const allSchedule = {};
  Object.keys(hours).forEach((day) => { allSchedule[day] = getDaySchedule(day); });
  return allSchedule;
};

const isADay = (argument) => Object.keys(hours).includes(argument);
const isAnAnimal = (argument) => species.map((zooAnimal) => zooAnimal.name).includes(argument);
const isValidArgument = (argument) => isADay(argument) || isAnAnimal(argument);

function getSchedule(scheduleTarget) {
  if (!isValidArgument(scheduleTarget)) return getAllSchedule();
  if (isADay(scheduleTarget)) return { [scheduleTarget]: getDaySchedule(scheduleTarget) };
  return getAnimalAvailability(scheduleTarget);
}

module.exports = getSchedule;
