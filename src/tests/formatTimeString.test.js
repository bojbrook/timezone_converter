const { formatTimeString } = require("../index"); // Assuming the function is in the same file as before

describe("formatTimeString", () => {
  it("should return the correct time in 24-hour format (UTC)", () => {
    const time = new Date(Date.UTC(2024, 9, 23, 14, 5, 9)); // 14:05:09 UTC
    const result = formatTimeString(time, true);

    expect(result).toBe("14:05:09");
  });

  it("should return the correct time in 12-hour format with AM/PM (UTC)", () => {
    const time = new Date(Date.UTC(2024, 9, 23, 14, 5, 9)); // 14:05:09 UTC
    const result = formatTimeString(time, false);

    expect(result).toBe("2:05:09 PM");
  });

  it("should handle midnight (UTC) correctly in 24-hour format", () => {
    const time = new Date(Date.UTC(2024, 9, 23, 0, 0, 0)); // 00:00:00 UTC
    const result = formatTimeString(time, true);

    expect(result).toBe("0:00:00");
  });

  it("should handle midnight (UTC) correctly in 12-hour format with AM/PM", () => {
    const time = new Date(Date.UTC(2024, 9, 23, 0, 0, 0)); // 00:00:00 UTC
    const result = formatTimeString(time, false);

    expect(result).toBe("12:00:00 AM");
  });

  it("should handle noon (UTC) correctly in 12-hour format with AM/PM", () => {
    const time = new Date(Date.UTC(2024, 9, 23, 12, 0, 0)); // 12:00:00 UTC
    const result = formatTimeString(time, false);

    expect(result).toBe("12:00:00 PM");
  });
});
