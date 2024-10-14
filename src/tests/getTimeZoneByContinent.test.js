const { getTimeZoneByContinent } = require("../index");
const TIMEZONES = require("../data/timezones");
describe("getTimeZoneByContinent", () => {
  beforeAll(() => {
    // Set a fixed date for testing purposes
  });
  test("returns timezones for America continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES[0]).filter((timezone) =>
      timezone.includes("America")
    );
    expect(getTimeZoneByContinent("America")).toEqual(filteredTimezones);
  });

  test("returns timezones for Europe continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES[0]).filter((timezone) =>
      timezone.includes("Europe")
    );
    expect(getTimeZoneByContinent("Europe")).toEqual(filteredTimezones);
  });

  test("returns timezones for Asia continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES[0]).filter((timezone) =>
      timezone.includes("Asia")
    );
    expect(getTimeZoneByContinent("Asia")).toEqual(filteredTimezones);
  });

  test("returns timezones for Australia continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES[0]).filter((timezone) =>
      timezone.includes("Australia")
    );
    expect(getTimeZoneByContinent("Australia")).toEqual(filteredTimezones);
  });

  test("returns timezones for Africa continent", () => {
    const filteredTimezones = Object.keys(TIMEZONES[0]).filter((timezone) =>
      timezone.includes("Africa")
    );
    expect(getTimeZoneByContinent("Africa")).toEqual(filteredTimezones);
  });

  test("returns empty array for a continent with no timezones", () => {
    const filteredTimezones = Object.keys(TIMEZONES[0]).filter((timezone) =>
      timezone.includes("Antarctica")
    );
    expect(getTimeZoneByContinent("Antarctica")).toEqual(filteredTimezones);
  });

  test("returns empty array for an unknown continent", () => {
    expect(getTimeZoneByContinent("Unknown")).toEqual([]);
  });
});
