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
  return parseInt(result.substring(3));
}

module.exports = getUTCOffset;
