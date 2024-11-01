"use strict";
const TIMEZONES = require("./data/timezones");

function getUTCOffset(timezoneName, isDST = false) {
  const timezone = TIMEZONES[timezoneName];
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

  const utcTimeInMs = date.getTime();

  const offsetTimeInMs = utcTimeInMs + 3600000 * offset;

  const offsetDate = new Date(offsetTimeInMs);

  return offsetDate;
}

function getCurrentTimeFromTimezone(timezoneName, isDST = false) {
  const offset = getUTCOffset(timezoneName, isDST);
  const offsetDate = getCurrentTimeFromOffset(offset);
  return offsetDate;
}

function getTimeZonesByContinent(continent) {
  const timezones = TIMEZONES;

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

function getTimeZones() {
  return Object.keys(TIMEZONES);
}

function getOffsetFromDate(date, timeZone) {
  const options = { timeZone, timeZoneName: "shortOffset" };
  const parts = date.toLocaleString("en-US", options).split(" ");
  const offsetStr = parts[parts.length - 1]; // Last part is the offset

  // Convert the timezone offset to an integer (e.g., "GMT-4" => -4, "GMT+1" => 1)
  const offset = parseInt(offsetStr.replace("GMT", ""), 10);
  return offset;
}

function isDST(timeZone) {
  // Check if the timezone has DST
  if (
    !TIMEZONES[timeZone] ||
    TIMEZONES[timeZone].daylight_saving_time === "N/A"
  ) {
    return false;
  }

  const isSouthernHemisphere = TIMEZONES[timeZone].hemisphere === "Southern";
  const currentDate = new Date();

  const januaryOffset = getOffsetFromDate(
    new Date(currentDate.getFullYear(), 0, 1),
    timeZone
  );

  const julyOffset = getOffsetFromDate(
    new Date(currentDate.getFullYear(), 6, 1),
    timeZone
  );

  const currentOffset = getOffsetFromDate(currentDate, timeZone);

  if (isSouthernHemisphere) {
    return currentOffset === januaryOffset;
  } else {
    return currentOffset === julyOffset;
  }
}

module.exports = {
  getCurrentTimeFromTimezone,
  getUTCOffset,
  getTimeZonesByContinent,
  getCurrentTimeFromOffset,
  formatTimeString,
  getTimeZones,
  isDST,
};
