// const { compareTimezones } = require("../index");
// const { isDST, getUTCOffset } = require("../index"); // Import the functions individually
// // jest.mock("../index", () => ({
// //   ...jest.requireActual("../index"),
// //   isDST: jest.fn(),
// //   getUTCOffset: jest.fn(),
// // }));

// // // Mock isDST function to return preset values for DST status
// // const isDST = jest.fn((timezone) => {
// //   if (timezone === "America/New_York") return true;
// //   if (timezone === "Europe/London") return false;
// //   if (timezone === "Australia/Sydney") return true;
// //   return false;
// // });

// // // Mock getUTCOffset function to return preset offsets
// // const getUTCOffset = jest.fn((timezone, isDST) => {
// //   if (timezone === "America/New_York" && isDST) return -4;
// //   if (timezone === "America/New_York" && !isDST) return -5;
// //   if (timezone === "Europe/London" && isDST) return 1;
// //   if (timezone === "Europe/London" && !isDST) return 0;
// //   if (timezone === "Australia/Sydney" && isDST) return 11;
// //   if (timezone === "Australia/Sydney" && !isDST) return 10;
// //   return "Timezone not found";
// // });

// // Now, write the test cases
// describe("compareTimezones", () => {
//   beforeEach(() => {
//     jest.clearAllMocks(); // Clear mocks between tests
//   });

//   test("returns the difference in offsets when both timezones are found and have valid offsets", () => {
//     const result = compareTimezones("America/New_York", "Europe/London");
//     expect(result).toBe(-5); // New York (-4) - London (1)
//   });

//   test("returns 'Timezone not found' if timezone1 is not found", () => {
//     const result = compareTimezones("Invalid/Timezone", "Europe/London");
//     expect(result).toBe("Timezone not found");
//   });

//   test("returns 'Timezone not found' if timezone2 is not found", () => {
//     const result = compareTimezones("America/New_York", "Invalid/-");
//     expect(result).toBe("Timezone not found");
//   });

//   test("returns 'Timezone not found' if getUTCOffset returns 'Timezone not found' for timezone1", () => {
//     getUTCOffset.mockReturnValueOnce("Timezone not found");
//     const result = compareTimezones("America/New_York", "Europe/London");
//     expect(result).toBe("Timezone not found");
//   });

//   test("returns the correct offset difference when DST affects one timezone", () => {
//     // Use jest.spyOn to mock the actual functions at the module level
//     jest
//       .spyOn(require("../index"), "isDST")
//       .mockImplementationOnce(() => true)
//       .mockImplementationOnce(() => false);
//     jest
//       .spyOn(require("../index"), "getUTCOffset")
//       .mockImplementationOnce(() => -4) // New York in DST
//       .mockImplementationOnce(() => 0); // London standard time

//     const result = compareTimezones("America/New_York", "Europe/London");

//     // Assertions to verify function behavior
//     expect(require("../index").isDST).toHaveBeenNthCalledWith(
//       1,
//       "America/New_York"
//     );
//     expect(require("../index").isDST).toHaveBeenNthCalledWith(
//       2,
//       "Europe/London"
//     );
//     expect(require("../index").getUTCOffset).toHaveBeenNthCalledWith(
//       1,
//       "America/New_York",
//       true
//     );
//     expect(require("../index").getUTCOffset).toHaveBeenNthCalledWith(
//       2,
//       "Europe/London",
//       false
//     );
//     expect(result).toBe(-4); // New York (-4) - London (0)
//   });
// });

jest.mock("../getUtcOffset.js", () => jest.fn());
jest.mock("../isDST.js", () => jest.fn());

const { compareTimezones } = require("../index");
const getUTCOffset = require("../getUtcOffset");
const isDST = require("../isDST");

describe("compareTimezones", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks between tests
  });

  it('should return "Timezone not found" for invalid timezones', () => {
    const result = compareTimezones("invalid", "another_invalid");

    expect(result).toBe("Timezone not found");
  });

  it("should return the difference in UTC offsets", () => {
    // Mock isDST to return preset values
    isDST.mockReturnValueOnce(false);
    isDST.mockReturnValueOnce(true);

    // Mock getUTCOffset to return preset values
    getUTCOffset.mockReturnValueOnce(-8);
    getUTCOffset.mockReturnValueOnce(5);

    const result = compareTimezones("America/Los_Angeles", "Asia/Tokyo");

    expect(result).toBe(-13);
    expect(isDST).toHaveBeenCalledTimes(2); // Verify that isDST is called twice
    expect(getUTCOffset).toHaveBeenCalledTimes(2); // Verify that getUTCOffset is called twice
  });
});
