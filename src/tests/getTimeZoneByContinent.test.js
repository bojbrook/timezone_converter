const { getTimeZonesByContinent } = require("../index");
const TIMEZONES = require("../data/timezones");
describe("getTimeZonesByContinent", () => {
  beforeAll(() => {
    // Set a fixed date for testing purposes
  });
  test("returns timezones for America continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES).filter((timezone) =>
      timezone.includes("America")
    );
    expect(getTimeZonesByContinent("America")).toEqual(filteredTimezones);
  });

  test("returns timezones for Europe continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES).filter((timezone) =>
      timezone.includes("Europe")
    );
    expect(getTimeZonesByContinent("Europe")).toEqual(filteredTimezones);
  });

  test("returns timezones for Asia continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES).filter((timezone) =>
      timezone.includes("Asia")
    );
    expect(getTimeZonesByContinent("Asia")).toEqual(filteredTimezones);
  });

  test("returns timezones for Australia continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES).filter((timezone) =>
      timezone.includes("Australia")
    );
    expect(getTimeZonesByContinent("Australia")).toEqual(filteredTimezones);
  });

  test("returns timezones for Africa continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES).filter((timezone) =>
      timezone.includes("Africa")
    );
    expect(getTimeZonesByContinent("Africa")).toEqual(filteredTimezones);
  });

  test("returns empty array for a continent with no timezones", () => {
    const filteredTimezones = Object.keys(TIMEZONES).filter((timezone) =>
      timezone.includes("Antarctica")
    );
    expect(getTimeZonesByContinent("Antarctica")).toEqual(filteredTimezones);
  });

  test("returns empty array for an unknown continent", () => {
    expect(getTimeZonesByContinent("Unknown")).toEqual([]);
  });
});
