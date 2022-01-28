import { DailySummary } from './daily-summary';

const data = {
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
  startTime: '2021-02-10T13:05:00.000Z',
  endTime: '2021-02-11T17:59:01.000Z',
  logMetaData: {
    shippingDocs: '',
    isCertified: false,
    certifiedAtTime: '2021-02-19T00:37:35.843Z',
  },
  distanceTraveled: {
    driveDistanceMeters: 0,
  },
  dutyStatusDurations: {
    activeDurationMs: 86400000,
    onDutyDurationMs: 86400000,
    driveDurationMs: 86400000,
    offDutyDurationMs: 86400000,
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
};

describe('DailySummary', () => {
  it('should be defined', () => {
    expect(new DailySummary(data)).toBeDefined();
  });
});
