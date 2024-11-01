const TIMEZONES = require("../data/timezones");
const { isDST } = require("../index");

// // Mock implementation of getOffsetFromDate
// const getOffsetFromDate = jest.fn((date, timeZone) => {
//   // Mock offsets based on the month and timezone
//   const month = date.getMonth();

//   // Example offsets: New York is in DST from March to November, Sydney from October to March
//   if (timeZone === "America/New_York") {
//     return month >= 3 && month <= 10 ? -4 : -5; // DST in summer, standard in winter
//   } else if (timeZone === "Australia/Sydney") {
//     return month >= 9 || month <= 2 ? 11 : 10; // DST in summer, standard in winter
//   } else if (timeZone === "Europe/London") {
//     return month >= 3 && month <= 9 ? 1 : 0; // DST in summer, standard in winter
//   }
//   return 0;
// });

describe("isDST", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
  test("returns true if Northern Hemisphere timezone is in DST", () => {
    // Set the current date to a date when DST is typically active (e.g., July for New York)
    const mockDate = new Date("2024-07-01T00:00:00");
    jest.setSystemTime(mockDate);

    expect(isDST("America/New_York")).toBe(true);
  });

  test("returns false if Northern Hemisphere timezone is not in DST", () => {
    // Set the current date to a date when DST is typically inactive (e.g., January for New York)
    const mockDate = new Date("2024-01-01T00:00:00");
    jest.setSystemTime(mockDate);

    expect(isDST("America/New_York")).toBe(false);
  });

  test("returns true if Southern Hemisphere timezone is in DST", () => {
    // Set the current date to a date when DST is active (e.g., January for Sydney)
    const mockDate = new Date("2024-01-01T00:00:00");
    jest.setSystemTime(mockDate);

    expect(isDST("Australia/Sydney")).toBe(true);
  });

  test("returns false if Southern Hemisphere timezone is not in DST", () => {
    // Set the current date to a date when DST is inactive (e.g., July for Sydney)
    const mockDate = new Date("2024-07-01T00:00:00");
    jest.setSystemTime(mockDate);

    expect(isDST("Australia/Sydney")).toBe(false);
  });
});
