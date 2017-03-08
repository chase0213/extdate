import { i18n } from './i18n';
import { ExtDate } from './ExtDate';
import { Values } from './values';

export class ExtInterval {
  beginAt: ExtDate;
  endAt: ExtDate;
  interval: number;

  constructor(beginAt?: ExtDate, endAt?: ExtDate) {
    this.beginAt = beginAt;
    this.endAt   = endAt;
    this._updateInterval();
  }

  //
  // Interval as arbitary units
  //

  asUnixTime(): number {
    return this.interval;
  }

  asMiliSecond(): number {
    return this.interval;
  }

  asSecond(): number {
    return this.interval / Values.msec2sec;
  }

  asMinute(): number {
    return this.asSecond() / Values.sec2min;
  }

  asHour(): number {
    return this.asMinute() / Values.min2hour;
  }

  asDay(): number {
    return this.asHour() / Values.hour2day;
  }

  asWeek(): number {
    return this.asDay() / Values.day2week;
  }

  asMonth(): number {
    console.warn("The value asMonth() returns is not accurate because the number of days in a month are variable.");

    return this.asDay() / Values.meanDaysInMonth;
  }

  asYear(): number {
    console.warn("The value year() returns is not accurate because the number of days in a month are variable.");

    return this.asDay() / Values.meanDaysInYear;
  }

  compare(): number[] {
    return [
      this.compareAt(0),
      this.compareAt(1),
      this.compareAt(2),
      this.compareAt(3),
      this.compareAt(4),
      this.compareAt(5),
      this.compareAt(6),
    ];
  }

  compareAt(level: number): number {
    switch (level) {
      case 0:
        return this._sign(this.endAt.year() - this.beginAt.year());
      case 1:
        return this._sign(this.endAt.month() - this.beginAt.month());
      case 2:
        return this._sign(this.endAt.day() - this.beginAt.day());
      case 3:
        return this._sign(this.endAt.hour() - this.beginAt.hour());
      case 4:
        return this._sign(this.endAt.minute() - this.beginAt.minute());
      case 5:
        return this._sign(this.endAt.second() - this.beginAt.second());
      case 6:
        return this._sign(this.endAt.miliSecond() - this.beginAt.miliSecond());
      default:
        throw("Invalid level: argument 'level' of compareAt(level) must be in range [0, 6]");
    }
  }

  //
  // Setter methods
  //

  setBeginAt(date: ExtDate): void {
    this.beginAt = date;
  }

  setEndAt(date: ExtDate): void {
    this.endAt = date;
  }


  private _updateInterval(): void {
    if (this.beginAt && this.endAt) {
      this.interval = this.endAt.unixTime() - this.beginAt.unixTime();
    }
  }

  private _sign(value: number): number {
    if (value > 0) {
      return 1;
    } else if (value < 0) {
      return -1;
    } else {
      return 0;
    }
  }

}