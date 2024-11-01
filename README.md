# Timezone Library

## Overview

This library provides utilities for converting between different timezones. It is designed to be simple, efficient, and easy to integrate into your projects.

## Features

- Get the time current time in specific timzone
- DST support
- Support for all major timezones
- Easy-to-use API

## Installation

To install the library, use the following command:

```bash
npm install zone_converter
```

## Usage

Here is a basic example of how to use the library:

```javascript
const { getCurrentTimeFromTimezone } = require("zone_converter");

// Convert time from UTC to EST
const berlinTime = getCurrentTimeFromTimezone("Europe/Berlin", false);
console.log(berlinTime); // Output: 2024-10-24T15:56:24.722Z
```

You can get a list of all available cities and timezones by using the following:

```javascript
const { getAllTimezones } = require("zone_converter");

const timezones = getAllTimezones();
console.log(timezones); // Output: ["Europe/Berlin", "America/New_York", ...]
```

## API Reference

### `getCurrentTimeFromTimezone(timezone: string, isDST: boolean): Date`

Returns a `Date` object based on the provided timezone.

- `timezone`: The timezone identifier (e.g., "Europe/Berlin").
- `isDST`: Boolean indicating whether Daylight Saving Time is in effect.

### `getUTCOffset(timezone: string, isDST: boolean): number`

Returns the offset from UTC based on the provided timezone.

- `timezone`: The timezone identifier (e.g., "Europe/Berlin").
- `isDST`: Boolean indicating whether Daylight Saving Time is in effect.

### `getCurrentTimeFromOffset(offset: number): Date`

Returns a `Date` object based on the provided offset from UTC.

- `offset`: The offset in hours from UTC.

### `getTimeZonesByContinent(continent: string): string[]`

Returns a list of timezones in the provided continent.

- `continent`: The name of the continent (e.g., "Europe").

### `formatTimeString(time: Date, is24Hours: boolean): string`

Returns a formatted string of a `Date` object.

- `time`: The `Date` object to format.
- `is24Hours`: Boolean indicating whether to use 24-hour format.

### `isDST(timeZone: String): Boolean`

Returns a boolean if provided timezone is in Daylight savings time. **_Note:_** Will also return false if the timezone doesn't participate in DST

- `timezone`: The timezone identifier (e.g., "Europe/Berlin").

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/yourusername/zone_converter).
