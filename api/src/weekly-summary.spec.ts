import { WeeklySummary } from './weekly-summary';

const data = [
  {
    driver: {
      timezone: 'America/Los_Angeles',
      eldSettings: {
        rulesets: [
          {
            cycle: 'TX 70 hour / 7 day',
            jurisdiction: 'TX',
            restart: '24-hour Restart',
            shift: 'Texas Intrastate',
          },
          {
            break: 'Property (off-duty/sleeper)',
            cycle: 'USA 70 hour / 8 day',
            restart: '34-hour Restart',
            shift: 'US Interstate Property',
          },
        ],
      },
      id: 'abc1234',
      name: 'John Smith',
    },
    startTime: '2021-02-20T13:05:00.000Z',
    endTime: '2021-02-21T15:59:01.000Z',
    logMetaData: {
      shippingDocs: '',
      isCertified: false,
    },
    distanceTraveled: {
      driveDistanceMeters: 0,
    },
    dutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 22075929,
      driveDurationMs: 8524071,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
    pendingDutyStatusDurations: {
      activeDurationMs: 0,
      onDutyDurationMs: 0,
      driveDurationMs: 0,
      offDutyDurationMs: 86400000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
  },
  {
    driver: {
      timezone: 'America/Los_Angeles',
      eldSettings: {
        rulesets: [
          {
            cycle: 'TX 70 hour / 7 day',
            jurisdiction: 'TX',
            restart: '24-hour Restart',
            shift: 'Texas Intrastate',
          },
          {
            break: 'Property (off-duty/sleeper)',
            cycle: 'USA 70 hour / 8 day',
            restart: '34-hour Restart',
            shift: 'US Interstate Property',
          },
        ],
      },
      id: 'abc1234',
      name: 'John Smith',
    },
    startTime: '2021-02-21T13:05:00.000Z',
    endTime: '2021-02-22T21:59:01.000Z',
    logMetaData: {
      shippingDocs: '',
      isCertified: false,
    },
    distanceTraveled: {
      driveDistanceMeters: 0,
    },
    dutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 22075929,
      driveDurationMs: 8524071,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
    pendingDutyStatusDurations: {
      activeDurationMs: 0,
      onDutyDurationMs: 0,
      driveDurationMs: 0,
      offDutyDurationMs: 86400000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
  },
  {
    driver: {
      timezone: 'America/Los_Angeles',
      eldSettings: {
        rulesets: [
          {
            cycle: 'TX 70 hour / 7 day',
            jurisdiction: 'TX',
            restart: '24-hour Restart',
            shift: 'Texas Intrastate',
          },
          {
            break: 'Property (off-duty/sleeper)',
            cycle: 'USA 70 hour / 8 day',
            restart: '34-hour Restart',
            shift: 'US Interstate Property',
          },
        ],
      },
      id: 'abc1234',
      name: 'John Smith',
    },
    startTime: '2021-02-22T13:05:00.000Z',
    endTime: '2021-02-23T16:59:01.000Z',
    logMetaData: {
      shippingDocs: '',
      vehicles: [
        {
          id: '212014918175183',
          name: '15372',
          externalIds: {
            'samsara.serial': 'GYDDHVTE5V',
            'samsara.vin': '3AKJGEBG2FDGN2346',
          },
        },
      ],
      isCertified: false,
      certifiedAtTime: '2021-02-25T19:37:05.256Z',
    },
    distanceTraveled: {
      driveDistanceMeters: 19090,
    },
    dutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 27698131,
      driveDurationMs: 2901869,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
    pendingDutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 27698131,
      driveDurationMs: 2901869,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
  },
  {
    driver: {
      timezone: 'America/Los_Angeles',
      eldSettings: {
        rulesets: [
          {
            cycle: 'TX 70 hour / 7 day',
            jurisdiction: 'TX',
            restart: '24-hour Restart',
            shift: 'Texas Intrastate',
          },
          {
            break: 'Property (off-duty/sleeper)',
            cycle: 'USA 70 hour / 8 day',
            restart: '34-hour Restart',
            shift: 'US Interstate Property',
          },
        ],
      },
      id: 'abc1234',
      name: 'John Smith',
    },
    startTime: '2021-02-23T13:05:00.000Z',
    endTime: '2021-02-24T21:59:01.000Z',
    logMetaData: {
      shippingDocs: '',
      vehicles: [
        {
          id: '212014918167897',
          name: '15372',
          externalIds: {
            'samsara.serial': 'GHGUKRET9K',
            'samsara.vin': '3AKJGEBG4FDGN2350',
          },
        },
        {
          id: '212014918175183',
          name: '15372',
          externalIds: {
            'samsara.serial': 'GYDDHVTE5V',
            'samsara.vin': '3AKJGEBG2FDGN2346',
          },
        },
      ],
      isCertified: false,
      certifiedAtTime: '2021-02-25T19:36:56.094Z',
    },
    distanceTraveled: {
      driveDistanceMeters: 111007,
    },
    dutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 22075929,
      driveDurationMs: 8524071,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
    pendingDutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 22075929,
      driveDurationMs: 8524071,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
  },
  {
    driver: {
      timezone: 'America/Los_Angeles',
      eldSettings: {
        rulesets: [
          {
            cycle: 'TX 70 hour / 7 day',
            jurisdiction: 'TX',
            restart: '24-hour Restart',
            shift: 'Texas Intrastate',
          },
          {
            break: 'Property (off-duty/sleeper)',
            cycle: 'USA 70 hour / 8 day',
            restart: '34-hour Restart',
            shift: 'US Interstate Property',
          },
        ],
      },
      id: 'abc1234',
      name: 'John Smith',
    },
    startTime: '2021-02-24T13:05:00.000Z',
    endTime: '2021-02-25T21:55:01.000Z',
    logMetaData: {
      shippingDocs: '',
      isCertified: false,
    },
    distanceTraveled: {
      driveDistanceMeters: 0,
    },
    dutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 22075929,
      driveDurationMs: 8524071,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
    pendingDutyStatusDurations: {
      activeDurationMs: 0,
      onDutyDurationMs: 0,
      driveDurationMs: 0,
      offDutyDurationMs: 86400000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
  },
  {
    driver: {
      timezone: 'America/Los_Angeles',
      eldSettings: {
        rulesets: [
          {
            cycle: 'TX 70 hour / 7 day',
            jurisdiction: 'TX',
            restart: '24-hour Restart',
            shift: 'Texas Intrastate',
          },
          {
            break: 'Property (off-duty/sleeper)',
            cycle: 'USA 70 hour / 8 day',
            restart: '34-hour Restart',
            shift: 'US Interstate Property',
          },
        ],
      },
      id: 'abc1234',
      name: 'John Smith',
    },
    startTime: '2021-02-25T13:05:00.000Z',
    endTime: '2021-02-26T22:59:01.000Z',
    logMetaData: {
      shippingDocs: '',
      isCertified: false,
    },
    distanceTraveled: {
      driveDistanceMeters: 0,
    },
    dutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 22075929,
      driveDurationMs: 8524071,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
    pendingDutyStatusDurations: {
      activeDurationMs: 0,
      onDutyDurationMs: 0,
      driveDurationMs: 0,
      offDutyDurationMs: 86400000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
  },
  {
    driver: {
      timezone: 'America/Los_Angeles',
      eldSettings: {
        rulesets: [
          {
            cycle: 'TX 70 hour / 7 day',
            jurisdiction: 'TX',
            restart: '24-hour Restart',
            shift: 'Texas Intrastate',
          },
          {
            break: 'Property (off-duty/sleeper)',
            cycle: 'USA 70 hour / 8 day',
            restart: '34-hour Restart',
            shift: 'US Interstate Property',
          },
        ],
      },
      id: 'abc1234',
      name: 'John Smith',
    },
    startTime: '2021-02-26T13:05:00.000Z',
    endTime: '2021-02-27T20:59:01.000Z',
    logMetaData: {
      shippingDocs: '',
      isCertified: false,
    },
    distanceTraveled: {
      driveDistanceMeters: 0,
    },
    dutyStatusDurations: {
      activeDurationMs: 30600000,
      onDutyDurationMs: 22075929,
      driveDurationMs: 8524071,
      offDutyDurationMs: 55800000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
    pendingDutyStatusDurations: {
      activeDurationMs: 0,
      onDutyDurationMs: 0,
      driveDurationMs: 0,
      offDutyDurationMs: 86400000,
      sleeperBerthDurationMs: 0,
      yardMoveDurationMs: 0,
      personalConveyanceDurationMs: 0,
      waitingTimeDurationMs: 0,
    },
  },
];
describe('WeeklySummary', () => {
  it('should be defined', () => {
    expect(new WeeklySummary(new Date())).toBeDefined();
  });
});
