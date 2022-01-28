import { Injectable, Logger } from '@nestjs/common';
import * as appRoot from 'app-root-path';
import * as fs from 'fs';
import { startOfWeek } from 'date-fns';
import * as path from 'path';
import { get, set, concat, map } from 'lodash';
import { DailySummary, IELDayData } from './daily-summary';
import { WeeklySummary } from './weekly-summary';

@Injectable()
export class AppService {
  logger: Logger;
  days: Array<IELDayData> = [];
  payRate = 22;
  response: any;
  rawData: any;

  constructor() {
    this.logger = new Logger('AppService', true);

    this.response = {};

    this.loadData();
  }

  loadData(): any {
    const jsonpath = path.resolve(`${appRoot.toString()}`, 'HOS_log.json');
    this.days = [];

    if (fs.existsSync(jsonpath)) {
      this.rawData = JSON.parse(fs.readFileSync(jsonpath).toString());
      //extract daily log data from each 'page' of json data
      map(this.rawData, (page) => {
        this.days = concat(this.days, page.data);
      });
    } else {
      throw new Error(`HOS_log.json is not found in '${jsonpath}'`);
    }
  }

  processData(): any {
    for (const current of this.days) {
      const weekStart = startOfWeek(new Date(current.startTime));

      //define grouped week key (eg: 'Sunday, February 14, 2021' )
      const groupKey = `${weekStart.toLocaleDateString('en-IS', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}`;

      let summary: WeeklySummary = get(this.response, groupKey);

      if (!summary) {
        summary = new WeeklySummary(weekStart);
        this.days = [];
        set(this.response, groupKey, summary);
      }

      const dayData = new DailySummary(current);

      summary.weeklyOnDutyDurationMinutes += dayData.onDutyDurationMinutes;

      if (dayData.onDutyDurationMinutes) {
        if (summary.weeklyOnDutyDurationMinutes <= 2400) {
          dayData.dailyGross =
            (dayData.onDutyDurationMinutes / 60) * this.payRate;

          summary.weeklyBaseMinutes = summary.weeklyOnDutyDurationMinutes;

          summary.weeklyBaseGross =
            (summary.weeklyOnDutyDurationMinutes / 60) * this.payRate;
        } else {
          summary.weeklyBaseMinutes = 2400;

          summary.weeklyOvertimeMinutes =
            summary.weeklyOnDutyDurationMinutes - 2400;

          // calculate the daily pay including the overtime pay
          dayData.dailyGross = dayData.dailyGross =
            (dayData.onDutyDurationMinutes / 60) * this.payRate;

          summary.weeklyBaseGross = 40 * this.payRate;
          summary.weeklyOTGross =
            (summary.weeklyOvertimeMinutes / 60) * (this.payRate * 1.5);

          summary.weeklyGross = summary.weeklyOTGross + summary.weeklyBaseGross;

          summary.complianceIndex = summary.weeklyOnDutyDurationMinutes / 60;
        }
      }

      summary.days.push(dayData);

      this.logger.log({ message: 'processed day', data: dayData });
    }

    return this.response;
  }
}
