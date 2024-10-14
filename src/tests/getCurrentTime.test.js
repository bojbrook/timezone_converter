const { getCurrentTime } = require("../index");

// Jest tests
describe("getCurrentTime", () => {
  beforeAll(() => {
    // Set a fixed date for testing purposes
    jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => new Date("2024-10-14T12:00:00Z").getTime());
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("returns correct time for UTC+0", () => {
    expect(getCurrentTime(0)).toBe("2024-10-14T12:00:00.000Z");
  });

  test("returns correct time for UTC+1", () => {
    expect(getCurrentTime(1)).toBe("2024-10-14T13:00:00.000Z");
  });

  test("returns correct time for UTC-1", () => {
    expect(getCurrentTime(-1)).toBe("2024-10-14T11:00:00.000Z");
  });

  test("returns correct time for UTC+10", () => {
    expect(getCurrentTime(10)).toBe("2024-10-14T22:00:00.000Z");
  });

  test("returns correct time for UTC-10", () => {
    expect(getCurrentTime(-10)).toBe("2024-10-14T02:00:00.000Z");
  });
});
