const { getCurrentTimeFromOffset } = require("../index");

describe("getCurrentTimeFromOffset", () => {
  const RealDate = Date;
  // Mock the current date
  beforeEach(() => {
    const mockedDate = new Date(Date.UTC(2024, 9, 23, 12, 0, 0)); // Oct 23, 2024 12:00:00 UTC
    jest.spyOn(global, "Date").mockImplementation(() => mockedDate);
    global.Date.UTC = RealDate.UTC;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return the correct time with a positive offset (e.g. UTC +2)", () => {
    const offset = 2; // 2 hours ahead of UTC
    const expectedDate = new Date(Date.UTC(2024, 9, 23, 14, 0, 0)); // 2 PM UTC

    const result = getCurrentTimeFromOffset(offset);

    expect(result.toISOString()).toBe(expectedDate.toISOString());
  });

  it("should return the correct time with a negative offset (e.g. UTC -3)", () => {
    const offset = -3; // 3 hours behind UTC
    const expectedDate = new Date(Date.UTC(2024, 9, 23, 9, 0, 0)); // 9 AM UTC

    const result = getCurrentTimeFromOffset(offset);

    expect(result.toISOString()).toBe(expectedDate.toISOString());
  });

  it("should return the current UTC time when the offset is 0", () => {
    const offset = 0; // No offset (UTC time)
    const expectedDate = new Date(Date.UTC(2024, 9, 23, 12, 0, 0)); // 12 PM UTC

    const result = getCurrentTimeFromOffset(offset);

    expect(result.toISOString()).toBe(expectedDate.toISOString());
  });
});
