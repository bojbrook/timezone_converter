const getUTCOffset = require("../getUtcOffset");

describe("getUTCOffset", () => {
  test("returns standard time for America/New_York", () => {
    expect(getUTCOffset("America/New_York")).toBe(-5);
  });

  test("returns daylight saving time for America/New_York", () => {
    expect(getUTCOffset("America/New_York", true)).toBe(-4);
  });

  test("returns standard time for Europe/London", () => {
    expect(getUTCOffset("Europe/London")).toBe(0);
  });

  test("returns daylight saving time for Europe/London", () => {
    expect(getUTCOffset("Europe/London", true)).toBe(1);
  });

  test("returns standard time for Australia/Sydney", () => {
    expect(getUTCOffset("Australia/Sydney")).toBe(10);
  });

  test("returns daylight saving time for Australia/Sydney", () => {
    expect(getUTCOffset("Australia/Sydney", true)).toBe(11);
  });

  test('returns "Timezone not found" for an unknown timezone', () => {
    expect(getUTCOffset("Unknown/Timezone")).toBe("Timezone not found");
  });
});
