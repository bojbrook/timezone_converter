// Import the function and its dependencies
const { getCurrentTimeFromTimezone } = require("../index");

const RealDate = Date;

describe("getCurrentTimeFromTimezone", () => {
  beforeEach(() => {
    // Mock UTC Date so it's always the same
    const mockedDate = new Date(Date.UTC(2024, 9, 23, 12, 0, 0)); // Oct 23, 2024 12:00:00 UTC
    jest.spyOn(global, "Date").mockImplementation(() => mockedDate);
    global.Date.UTC = RealDate.UTC; // Preserve the original Date.UTC
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore mocks to avoid conflicts between tests
  });

  test("should return the current time for a timezone without DST", () => {
    // Mock return values
    const mockTime = new Date(Date.UTC(2024, 9, 23, 13, 0, 0)); // Mocked time after offset

    const result = getCurrentTimeFromTimezone("Europe/Berlin", false);

    expect(result).toBe(mockTime); // Ensure the result is the mocked time
  });

  test("should return the current time for a timezone with DST", () => {
    const mockTime = new Date(Date.UTC(2024, 9, 23, 14, 0, 0)); // Mocked time after offset

    const result = getCurrentTimeFromTimezone("Europe/Berlin", true);

    expect(result).toBe(mockTime); // Ensure the result is the mocked time
  });
});
