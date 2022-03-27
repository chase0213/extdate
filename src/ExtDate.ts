import { i18n } from './i18n';
import { Values } from './values';

// FIXME:
// remove this line if new Date(...args) can generate instance of Date
declare const Date;

export class ExtDate {
  date: Date;

  INDEX_YEAR:number = 0;
  INDEX_MONTH:number = 1;
  INDEX_DAY:number = 2;
  INDEX_HOUR:number = 3;
  INDEX_MINUTE:number = 4;
  INDEX_SECOND:number = 5;
  INDEX_MILI_SECOND:number = 6;

  constructor(...args: (Date|number)[]) {
    if (args.length === 1 && args[0] instanceof Date) {
      // given Date
      this.date = args[0] as Date;

    } else if (args.length === 1) {
      // given unixtime
      this.date = new Date(args[0]);

    } else if (args.length === 0) {
      // no args given
      this.date = new Date();

    } else {
      // given year, month, ..., milisecond
      args[this.INDEX_MONTH] = (args[this.INDEX_MONTH] as number) - 1;
      this.date = new Date(...args);

    }
  }

  //
  // Getter methods
  //

  unixTime(): number {
    return this.date.getTime();
  }

  miliSecond(): number {
    return this.date.getMilliseconds();
  }

  second(): number {
    return this.date.getSeconds();
  }

  minute(): number {
    return this.date.getMinutes();
  }

  hour(): number {
    return this.date.getHours();
  }

  day(): number {
    return this.date.getDate();
  }

  month(): number {
    // In javascript, getMonth() returns the actual number of month - 1:
    // e.g., February => 1, March => 2, ...
    return this.date.getMonth() + 1;
  }

  year(): number {
    return this.date.getFullYear();
  }

  dayOfWeek(format: string = 'en'): string {
    return i18n[format]['weekDays'][this.date.getDay()];
  }

  dayOfWeekInShort(format?: string): string {
    return i18n[format]['weekDaysInShort'][this.date.getDay()];
  }

  toArray(): number[] {
    return [
      this.year(),
      this.month(),
      this.day(),
      this.hour(),
      this.minute(),
      this.second(),
      this.miliSecond()
    ];
  }

  //
  // Date calculations
  //

  nextSecond(step: number = 1): ExtDate {
    let dateArray = this.toArray();
    dateArray[this.INDEX_SECOND] += step;

    let date = new ExtDate(...dateArray);
    return date;
  }

  nextMinute(step: number = 1): ExtDate {
    let dateArray = this.toArray();
    dateArray[this.INDEX_MINUTE] += step;

    let date = new ExtDate(...dateArray);
    return date;
  }

  nextHour(step: number = 1): ExtDate {
    let dateArray = this.toArray();
    dateArray[this.INDEX_HOUR] += step;

    let date = new ExtDate(...dateArray);
    return date;
  }

  nextDay(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_DAY] += step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  nextWeek(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_DAY] += step * Values.day2week;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  nextMonth(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_MONTH] += step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  nextYear(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_YEAR] += step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  prevSecond(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_SECOND] -= step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  prevMinute(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_MINUTE] -= step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  prevHour(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_HOUR] -= step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  prevDay(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_DAY] -= step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  prevWeek(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_DAY] -= step * Values.day2week;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  prevMonth(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_MONTH] -= step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  prevYear(step: number = 1): ExtDate {
    let dateAsArray = this.toArray();
    dateAsArray[this.INDEX_YEAR] -= step;

    let date = new ExtDate(...dateAsArray);
    return date;
  }

  beginningOfDay(): ExtDate {
    return new ExtDate(
      this.year(),
      this.month(),
      this.day()
    );
  }

  beginningOfWeek(): ExtDate {
    let weekday = this.date.getDay();
    return new ExtDate(
      this.year(),
      this.month(),
      this.day() - weekday
    );
  }

  beginningOfMonth(): ExtDate {
    const beginning = 1;
    return new ExtDate(
      this.year(),
      this.month(),
      beginning
    );
  }

  beginningOfYear(): ExtDate {
    const beginningMonth = 1;
    const beginningDate = 1;
    return new ExtDate(
      this.year(),
      beginningMonth,
      beginningDate
    );
  }

  endOfDay(): ExtDate {
    return new ExtDate(
      this.year(),
      this.month(),
      this.day(),
      Values.hour2day - 1,
      Values.min2hour - 1,
      Values.sec2min - 1,
      Values.msec2sec - 1
    );
  }

  endOfWeek(): ExtDate {
    let weekday = this.date.getDay();
    let restOfWeekday = Values.day2week - weekday - 1;

    return new ExtDate(
      this.year(),
      this.month(),
      this.day() + restOfWeekday,
      Values.hour2day - 1,
      Values.min2hour - 1,
      Values.sec2min - 1,
      Values.msec2sec - 1
    );
  }

  endOfMonth(): ExtDate {
    const beginning = 1;
    let beginningOfNextMonth = new ExtDate(
      this.year(),
      this.month() + 1,
      beginning
    );
    return new ExtDate(beginningOfNextMonth.unixTime() - 1);
  }

  endOfYear(): ExtDate {
    const beginningMonth = 1;
    const beginningDate = 1;
    let beginningOfNextYear = new ExtDate(
      this.year() + 1,
      beginningMonth,
      beginningDate
    );
    return new ExtDate(beginningOfNextYear.unixTime() - 1);
  }

  //
  // Boolean methods
  //

  isSameDay(date: ExtDate): boolean {
    return (
      this.year() === date.year() &&
      this.month() === date.month() &&
      this.day() === date.day()
    );
  }

  isSameWeek(date: ExtDate): boolean {
    const beginningUnixTime = this.beginningOfWeek().unixTime();
    const endUnixTime = this.endOfWeek().unixTime();
    return (
      beginningUnixTime <= date.unixTime() &&
      endUnixTime >= date.unixTime()
    );
  }

  isSameMonth(date: ExtDate): boolean {
    return (
      this.year() === date.year() &&
      this.month() === date.month()
    );
  }

  isSameYear(date: ExtDate): boolean {
    return this.year() === date.year();
  }

  //
  // Formatter
  //

  strftime(formatString: string, lang: string = 'en'): string {
    const formatToken = /%[a-zA-Z%]{1}/g;
    const formatArray = formatString.match(formatToken);
    const formatStringArray = formatString.split(formatToken);
    return this._formatter(formatStringArray, formatArray, lang);
  }

  private _formatter(formatStringArray: string[], formatArray: string[], lang: string): string {
    let strArray = [];
    for (let i = 0; i < formatArray.length; i++ ) {
      strArray.push(formatStringArray[i]);
      strArray.push(this._formatAs(formatArray[i], lang));
    }
    strArray.push(formatStringArray[formatStringArray.length - 1]);
    return strArray.join('');
  }

  private _formatAs(format: string, lang: string): string {
    switch (format) {
      case '%a':
        return this.dayOfWeek(lang);
      case '%A':
        return this.dayOfWeekInShort(lang);
      case '%d':
        return this._zeroPadding(this.day(), 2);
      case '%H':
        return this._zeroPadding(this.hour(), 2);
      case '%L':
        return this._zeroPadding(this.miliSecond(), 3);
      case '%m':
        return this._zeroPadding(this.month(), 2);
      case '%M':
        return this._zeroPadding(this.minute(), 2);
      case '%S':
        return this._zeroPadding(this.second(), 2);
      case '%Y':
        return this._zeroPadding(this.year(), 4);
      default:
        console.error("Not Implemented...\nWe need your help!\nhttps://github.com/chase0213/extdate");
        throw "Not Implemented";
    }
  }

  private _zeroPadding(value: string|number, digit: number): string {
    let zeros: string = (new Array(digit)).fill(0).join('');
    return (zeros + value).slice(-digit);
  }

}
