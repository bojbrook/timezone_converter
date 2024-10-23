const TIMEZONES = require("./data/timezones");

// Format time as HH:MM:SS
const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function getUTCOffset(timezoneName, isDST = false) {
  const timezone = TIMEZONES[0][timezoneName];
  if (!timezone) {
    return "Timezone not found";
  }
  const result = isDST
    ? timezone["daylight_saving_time"]
    : timezone["standard_time"];

  // remove the "UTC" prefix
  return result.substring(3);
}

function getCurrentTimeFromOffset(offset) {
  const date = new Date();

  // Get current UTC time in milliseconds
  const utcTimeInMs = date.getTime();

  // Calculate the offset time by adding the offset in milliseconds
  const offsetTimeInMs = utcTimeInMs + 3600000 * offset;

  // Create a new Date object using the offset time
  const offsetDate = new Date(offsetTimeInMs);

  return offsetDate;
}

function getCurrentTime(timezoneName, isDST = false) {
  const offset = getUTCOffset(timezoneName, isDST);
  console.log(timezoneName, offset);

  return getCurrentTimeFromOffset(offset);
}

function getTimeZoneByContinent(continent) {
  const timezones = TIMEZONES[0];
  const filteredTimezones = Object.keys(timezones).filter((timezone) =>
    timezone.includes(continent)
  );
  return filteredTimezones;
}

function formatTimeString(time, is24Hours = false) {
  const hours = is24Hours ? time.getUTCHours() : time.getUTCHours() % 12 || 12; // Use UTC hours
  const minutes = time.getUTCMinutes().toString().padStart(2, "0"); // Use UTC minutes
  const seconds = time.getUTCSeconds().toString().padStart(2, "0"); // Use UTC seconds
  const ampm = is24Hours ? "" : time.getUTCHours() >= 12 ? "PM" : "AM"; // Add AM/PM for 12-hour format

  return `${hours}:${minutes}:${seconds} ${ampm}`.trim(); // Trim if it's 24-hour format
}

module.exports = {
  getCurrentTime,
  getUTCOffset,
  getTimeZoneByContinent,
  getCurrentTimeFromOffset,
  formatTimeString,
};
