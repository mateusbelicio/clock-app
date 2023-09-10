const today = new Date();

/**
 * Get the current day of the year
 * @returns {Number} a number representing the day of the year
 */
export function getDayOfYear() {
  const firstDayOfCurrentYear = new Date(today.getFullYear(), 0, 1);
  const dayOfYearInMiliseconds =
    today.getTime() - firstDayOfCurrentYear.getTime();

  return Math.floor(dayOfYearInMiliseconds / 1000 / 60 / 60 / 24) + 1;
}

/**
 * Gets the current day of the week
 * @returns {Number} a number from `1` to `7`, where the first day (`1`) is Sunday
 */
export function getDayOfWeek() {
  return today.getDay() + 1;
}

/**
 * Gets the number of the current week
 * @returns {Number} a number representing the number of the current week of the year
 */
export function getWeek() {
  // TOCHECK
  return Math.floor(getDayOfYear() / 7);
}

/**
 * Get date in ISO format
 * @returns a date as a string value in ISO format.
 */
export function getDatetime() {
  return today.toISOString();
}
