const { isDST } = require("../index");

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

  test("returns false if timezone does not observe DST", () => {
    // Set the current date to a date when DST is typically active (e.g., July for UTC)
    const mockDate = new Date("2024-07-01T00:00:00");
    jest.setSystemTime(mockDate);

    expect(isDST("America/Paramaribo")).toBe(false);
  });
});
