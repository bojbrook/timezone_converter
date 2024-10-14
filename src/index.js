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

function getCurrentTime(Offset) {
  // const date = new Date();
  const utc = Date.now();
  const newDate = new Date(utc + 3600000 * Offset);
  // const formattedTime = formatter.format(newDate);
  return newDate.toISOString();
}

function getTimeZoneByContinent(continent) {
  const timezones = TIMEZONES[0];
  const filteredTimezones = Object.keys(timezones).filter((timezone) =>
    timezone.includes(continent)
  );
  return filteredTimezones;
}

module.exports = {
  getCurrentTime,
  getUTCOffset,
  getTimeZoneByContinent,
};
