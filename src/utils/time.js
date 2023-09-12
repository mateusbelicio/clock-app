/**
 * Format datetime to show only the time
 * @param {Date} date
 * @returns time formatted as `HH`:`MM`:`SS` `AM/PM`
 */
export function formatTime(date) {
  return new Intl.DateTimeFormat('br', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

/**
 * Check if is day or not
 * @param {Date} time
 * @returns `true` if is day and `false` otherwise
 */
export function isDay(time) {
  const hours = Number(time.slice(0, 2));
  return hours >= 6 && hours < 18;
}
