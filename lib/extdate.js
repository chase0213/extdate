import { i18n } from './i18n';
var ExtDate = (function () {
    function ExtDate(date) {
        if (arguments.length === 0) {
            this.date = new Date();
        }
        else {
            this.date = new Date(arguments);
        }
        return this;
    }
    ExtDate.prototype.miliSecond = function () {
        return this.date.getMilliseconds();
    };
    ExtDate.prototype.second = function () {
        return this.date.getSeconds();
    };
    ExtDate.prototype.minute = function () {
        return this.date.getMinutes();
    };
    ExtDate.prototype.hour = function () {
        return this.date.getHours();
    };
    ExtDate.prototype.day = function () {
        return this.date.getDate();
    };
    ExtDate.prototype.month = function () {
        return this.date.getMonth() + 1;
    };
    ExtDate.prototype.year = function () {
        return this.date.getFullYear();
    };
    ExtDate.prototype.dayOfWeek = function (format) {
        return i18n[format][this.date.getDay()]['dayOfWeek'];
    };
    ExtDate.prototype.dayOfWeekInShort = function (format) {
        return i18n[format][this.date.getDay()]['dayOfWeekInShort'];
    };
    ExtDate.prototype.nextDay = function () {
        return new ExtDate(this.date.getDate() + 1);
    };
    ExtDate.prototype.nextWeek = function () {
        return new ExtDate(this.date.getDate() + 7);
    };
    ExtDate.prototype.nextMonth = function () {
        var date = this.date;
        date.setMonth(this.date.getMonth() + 1);
        return new ExtDate(date);
    };
    ExtDate.prototype.nextYear = function () {
        var date = this.date;
        date.setFullYear(this.date.getFullYear() + 1);
        return new ExtDate(date);
    };
    ExtDate.prototype.prevDay = function () {
        return new ExtDate(this.date.getDate() - 1);
    };
    ExtDate.prototype.prevWeek = function () {
        return new ExtDate(this.date.getDate() - 7);
    };
    ExtDate.prototype.prevMonth = function () {
        var date = this.date;
        date.setMonth(this.date.getMonth() - 1);
        return new ExtDate(date);
    };
    ExtDate.prototype.prevYear = function () {
        var date = this.date;
        date.setFullYear(this.date.getFullYear() - 1);
        return new ExtDate(date);
    };
    ExtDate.prototype.strftime = function (formatString, lang) {
        var tmpToken = "__token__";
        var formatToken = /%[a-zA-Z%]{1}/g;
        var formatArray = formatString.match(formatToken);
        var formatStringArray = formatString.split(formatToken);
        return this._formatter(formatStringArray, formatArray, lang);
    };
    ExtDate.prototype._formatter = function (formatStringArray, formatArray, lang) {
        var formatIndex = 0;
        for (var i = 0; i < formatStringArray.length; i++) {
            formatStringArray[i] = this._formatAs(formatArray[formatIndex], lang);
        }
        return formatStringArray.join('');
    };
    ExtDate.prototype._formatAs = function (format, lang) {
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
    };
    return ExtDate;
}());
export { ExtDate };
//# sourceMappingURL=extdate.js.map