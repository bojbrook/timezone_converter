const TIMEZONES = require("./data/timezones");
const logger = require("./helpers/logging");
const { getOffsetFromDate } = require("./index");

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

module.exports = isDST;
