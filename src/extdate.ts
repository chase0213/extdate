import { i18n } from './i18n';

export class ExtDate {
  date: Date;

  constructor(date?) {
    if (arguments.length === 0) {
      this.date = new Date();
    } else {
      this.date = new Date(arguments);
    }

    return this;
  }

  //
  // Getter methods
  //

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
    return this.date.getMonth() + 1;
  }

  year(): number {
    return this.date.getFullYear();
  }

  dayOfWeek(format?: string): string {
    return i18n[format][this.date.getDay()]['dayOfWeek'];
  }

  dayOfWeekInShort(format?: string): string {
    return i18n[format][this.date.getDay()]['dayOfWeekInShort'];
  }


  //
  // Date calculations
  //

  nextDay(): ExtDate {
    return new ExtDate(this.date.getDate() + 1);
  }

  nextWeek() {
    return new ExtDate(this.date.getDate() + 7);
  }

  nextMonth() {
    let date = this.date;
    date.setMonth(this.date.getMonth() + 1);
    return new ExtDate(date);
  }

  nextYear() {
    let date = this.date;
    date.setFullYear(this.date.getFullYear() + 1);
    return new ExtDate(date);
  }

  prevDay() {
    return new ExtDate(this.date.getDate() - 1);
  }

  prevWeek() {
    return new ExtDate(this.date.getDate() - 7);
  }

  prevMonth() {
    let date = this.date;
    date.setMonth(this.date.getMonth() - 1);
    return new ExtDate(date);
  }

  prevYear() {
    let date = this.date;
    date.setFullYear(this.date.getFullYear() - 1);
    return new ExtDate(date);
  }


  //
  // Formatter
  //

  strftime(formatString: string, lang?: string): string {
    const tmpToken = "__token__";
    const formatToken = /%[a-zA-Z%]{1}/g;
    const formatArray = formatString.match(formatToken);
    const formatStringArray = formatString.split(formatToken);
    return this._formatter(formatStringArray, formatArray, lang);
  }

  private _formatter(formatStringArray: string[], formatArray: string[], lang: string): string {
    let formatIndex = 0;
    for (let i = 0; i < formatStringArray.length; i++ ) {
      formatStringArray[i] = this._formatAs(formatArray[formatIndex], lang);
    }
    return formatStringArray.join('');
  }

  private _formatAs(format: string, lang: string): string {
    switch (format) {
      case '%a':
        return this.dayOfWeek(lang);
      case '%A':
        return this.dayOfWeekInShort(lang);
      case '%H':
        return '' + this.hour();
      case '%m':
        return '' + this.month();
      case '%M':
        return '' + this.minute();
      case '%S':
        return '' + this.second();
      case '%y':
        return '' + this.year();
      default:
        console.error("Not Implemented...\nWe need your help!\nhttps://github.com/chase0213/extdate");
        throw "Not Implemented";
    }
  }

}
