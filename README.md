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
npm install timezone_converter
```

## Usage

Here is a basic example of how to use the library:

```javascript
const { getCurrentTimeFromTimezone } = require("timezone_converter");

// Convert time from UTC to EST
const berlinTime = getCurrentTimeFromTimezone("Europe/Berlin", false);
console.log(berlinTime); // Output: 2024-10-24T15:56:24.722Z
```

You can get a list of all available cities and timezones by using the following:

```javascript
const { getAllTimezones } = require("timezone_converter");

const timezones = getAllTimezones();
console.log(timezones); // Output: ["Europe/Berlin", "America/New_York", ...]
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/yourusername/zone_converter).
