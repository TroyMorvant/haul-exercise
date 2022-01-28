import { millisecondsToMinutes } from 'date-fns';

export class DailySummary {
  activeDurationMinutes: number;
  driveDurationMinutes: number;
  endTime: Date;
  startTime: Date;
  offDutyDurationMinutes: number;
  onDutyDurationMinutes: number;
  personalConveyanceDurationMinutes: number;
  sleeperBerthDurationMinutes: number;
  waitingTimeDurationMinutes: number;
  yardMoveDurationMinutes: number;
  dailyGross: number;

  constructor(day: IELDayData) {
    this.startTime = new Date(day.startTime);
    this.endTime = new Date(day.endTime);
    this.dailyGross = 0;

    this.onDutyDurationMinutes = millisecondsToMinutes(
      day.dutyStatusDurations.onDutyDurationMs,
    );

    this.activeDurationMinutes = millisecondsToMinutes(
      day.dutyStatusDurations.activeDurationMs,
    );

    this.driveDurationMinutes = millisecondsToMinutes(
      day.dutyStatusDurations.driveDurationMs,
    );

    this.offDutyDurationMinutes = millisecondsToMinutes(
      day.dutyStatusDurations.offDutyDurationMs,
    );

    this.sleeperBerthDurationMinutes = millisecondsToMinutes(
      day.dutyStatusDurations.sleeperBerthDurationMs,
    );

    this.yardMoveDurationMinutes = millisecondsToMinutes(
      day.dutyStatusDurations.yardMoveDurationMs,
    );

    this.personalConveyanceDurationMinutes = millisecondsToMinutes(
      day.dutyStatusDurations.personalConveyanceDurationMs,
    );

    this.waitingTimeDurationMinutes = millisecondsToMinutes(
      day.dutyStatusDurations.waitingTimeDurationMs,
    );
  }
}

export interface IELDayData {
  driver: any;
  startTime: string;
  endTime: string;
  logMetaData: any;
  distanceTraveled: { driveDistanceMeters: number };
  dutyStatusDurations: {
    activeDurationMs: number;
    onDutyDurationMs: number;
    driveDurationMs: number;
    offDutyDurationMs: number;
    sleeperBerthDurationMs: number;
    yardMoveDurationMs: number;
    personalConveyanceDurationMs: number;
    waitingTimeDurationMs: number;
  };
  pendingDutyStatusDurations: {
    activeDurationMs: number;
    onDutyDurationMs: number;
    driveDurationMs: number;
    offDutyDurationMs: number;
    sleeperBerthDurationMs: number;
    yardMoveDurationMs: number;
    personalConveyanceDurationMs: number;
    waitingTimeDurationMs: number;
  };
}
