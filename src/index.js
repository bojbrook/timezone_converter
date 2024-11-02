"use strict";
const { log } = require("winston");
const TIMEZONES = require("./data/timezones");
const logger = require("./helpers/logging");

function getUTCOffset(timezoneName, isDST = false) {
  const timezone = TIMEZONES[timezoneName];
  if (!timezone) {
    logger.debug(`Timezone not found: ${timezoneName}`);
    return "Timezone not found";
  }
  const result = isDST
    ? timezone["daylight_saving_time"]
    : timezone["standard_time"];
  logger.debug(`UTC offset for ${timezoneName} is ${result}`);
  // remove the "UTC" prefix
  return result.substring(3);
}

function getCurrentTimeFromOffset(offset) {
  logger.debug(`getCurrentTimeFromOffset() -  ${offset}`);
  const date = new Date();

  const utcTimeInMs = date.getTime();

  const offsetTimeInMs = utcTimeInMs + 3600000 * offset;

  const offsetDate = new Date(offsetTimeInMs);
  logger.debug(`Current time from offset ${offset} is ${offsetDate}`);

  return offsetDate;
}

function getCurrentTimeFromTimezone(timezoneName, isDST = false) {
  logger.debug(
    `getCurrentTimeFromTimezone() - ${timezoneName} - Daylight Savings: ${isDST}`
  );
  const offset = getUTCOffset(timezoneName, isDST);
  const offsetDate = getCurrentTimeFromOffset(offset);
  return offsetDate;
}

function getTimeZonesByContinent(continent) {
  logger.debug(`getTimeZonesByContinent() - ${continent}`);
  const timezones = TIMEZONES;

  const filteredTimezones = Object.keys(timezones).filter((timezone) =>
    timezone.includes(continent)
  );
  logger.debug(`Timezones in ${continent}: ${filteredTimezones}`);
  return filteredTimezones;
}

function formatTimeString(time, is24Hours = false) {
  logger.debug(`formatTimeString() - ${time} - ${is24Hours}`);
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
  logger.debug(`getOffsetFromDate() - ${date} - ${timeZone}`);
  const options = { timeZone, timeZoneName: "shortOffset" };
  const parts = date.toLocaleString("en-US", options).split(" ");
  const offsetStr = parts[parts.length - 1]; // Last part is the offset

  // Convert the timezone offset to an integer (e.g., "GMT-4" => -4, "GMT+1" => 1)
  const offset = parseInt(offsetStr.replace("GMT", ""), 10);
  logger.debug(`Offset for ${date} in ${timeZone} is ${offset}`);
  return offset;
}

function isDST(timeZone) {
  logger.debug(`isDST() - ${timeZone}`);
  // Check if the timezone has DST
  if (
    !TIMEZONES[timeZone] ||
    TIMEZONES[timeZone].daylight_saving_time === "N/A"
  ) {
    return false;
  }

  const isSouthernHemisphere = TIMEZONES[timeZone].hemisphere === "Southern";
  logger.debug(
    `Is ${timeZone} in the Southern Hemisphere? ${isSouthernHemisphere}`
  );
  const currentDate = new Date();

  const januaryOffset = getOffsetFromDate(
    new Date(currentDate.getFullYear(), 0, 1),
    timeZone
  );
  logger.debug(`January offset: ${januaryOffset}`);

  const julyOffset = getOffsetFromDate(
    new Date(currentDate.getFullYear(), 6, 1),
    timeZone
  );
  logger.debug(`July offset: ${julyOffset}`);
  const currentOffset = getOffsetFromDate(currentDate, timeZone);
  logger.debug(`Current offset: ${currentOffset}`);

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
