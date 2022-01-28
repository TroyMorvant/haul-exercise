import { DailySummary } from './daily-summary';

export class WeeklySummary {
  startOfWeek: Date;
  complianceIndex: number;
  weeklyBaseGross: number;
  weeklyOTGross: number;
  totalGrossPay: number;
  weeklyOnDutyDurationMinutes: number;
  weeklyBaseMinutes: number;
  weeklyOvertimeMinutes: number;
  weeklyGross: number;
  days: Array<DailySummary>;

  constructor(startDate: Date) {
    this.startOfWeek = startDate;
    this.complianceIndex = 0;
    this.weeklyBaseGross = 0;
    this.weeklyGross = 0;
    this.totalGrossPay = 0;
    this.weeklyOnDutyDurationMinutes = 0;
    this.weeklyOvertimeMinutes = 0;
    this.days = [];
  }
}
