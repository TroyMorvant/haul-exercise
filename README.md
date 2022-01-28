<p align="center">
  <a href="https://haulwith.us" target="blank"><img src="https://haulwith.us/_next/image?url=%2Fimages%2Flogo.svg&w=256&q=100" width="320" alt="Haul Challenge" /></a>
</p>

## Description

For this coding challenge I have made the following assumptions:

- `OnDutyDurationMS` was chosen as 'working time' for the purposes of calculating pay, overtime, and compliance
- All `dutyStatusDuration` times provided in the data are assumed to be contiguous rather than a sum of distinct values throughout the day
- After everything was done I realized I probably should have calculated compliance differently but I guess we can discuss


## Installation

```bash
# API
$ cd api
$ npm install
```

```bash
# UI
$ cd ui
$ npm install
```

## Running the app

```bash
# start API
$ npm run start

# start UI
$ npm run start

```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
