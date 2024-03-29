let assert = require('assert');
let ExtDate = require('../ExtDate').ExtDate;

describe('ExtDate', function() {

  //
  // initialize ExtDate with current time
  //

  var currentExtDate;

  before(function() {
    currentExtDate = new ExtDate();
  });


  describe('#constructor(date: Date)', function() {
    it('should initialize ExtDate instance by given date', function() {
      var now = new Date();
      var extdate = new ExtDate(now);
      assert.equal(extdate.date.getTime(), now.getTime());
    });

    it('should initialize ExtDate instance with current time Date object', function() {
      var extdate = new ExtDate();
      var expected = (new Date()).getTime();
      var error = 3000; // error < 3sec
      assert.equal((expected - extdate.date.getTime() < error), true);
    });
  });


  describe('#unixTime(): number', function() {
    it('should return unixtime if ExtDate instance properly initialized', function() {
      var expected = currentExtDate.date.getTime();
      assert.equal(currentExtDate.unixTime(), expected);
    });
  });

  describe('#miliSecond(): number', function() {
    it('should return value of mili-second-digit', function() {
      var expected = currentExtDate.date.getMilliseconds();
      assert.equal(currentExtDate.miliSecond(), expected);
    });
  });

  describe('#second(): number', function() {
    it('should return value of second-digit', function() {
      var expected = currentExtDate.date.getSeconds();
      assert.equal(currentExtDate.second(), expected);
    });
  });

  describe('#minute(): number', function() {
    it('should return value of minute-digit', function() {
      var expected = currentExtDate.date.getMinutes();
      assert.equal(currentExtDate.minute(), expected);
    });
  });

  describe('#hour(): number', function() {
    it('should return value of hour-digit', function() {
      var expected = currentExtDate.date.getHours();
      assert.equal(currentExtDate.hour(), expected);
    });
  });

  describe('#day(): number', function() {
    it('should return value of day-digit', function() {
      var expected = currentExtDate.date.getDate();
      assert.equal(currentExtDate.day(), expected);
    });
  });

  describe('#month(): number', function() {
    it('should return value of month-digit', function() {
      var expected = currentExtDate.date.getMonth() + 1;
      assert.equal(currentExtDate.month(), expected);
    });
  });

  describe('#year(): number', function() {
    it('should return value of year-digit', function() {
      var expected = currentExtDate.date.getFullYear();
      assert.equal(currentExtDate.year(), expected);
    });
  });

  describe('#dayOfWeek(format?: string): string', function() {
    it('should return day of week as given format: en', function() {
      var sunday    = new ExtDate(2017, 3, 5);
      var monday    = new ExtDate(2017, 3, 6);
      var tuesday   = new ExtDate(2017, 3, 7);
      var wednesday = new ExtDate(2017, 3, 8);
      var thursday  = new ExtDate(2017, 3, 9);
      var friday    = new ExtDate(2017, 3, 10);
      var saturday  = new ExtDate(2017, 3, 11);
      assert.equal(   sunday.dayOfWeek('en'), 'Sunday');
      assert.equal(   monday.dayOfWeek('en'), 'Monday');
      assert.equal(  tuesday.dayOfWeek('en'), 'Tuesday');
      assert.equal(wednesday.dayOfWeek('en'), 'Wednesday');
      assert.equal( thursday.dayOfWeek('en'), 'Thursday');
      assert.equal(   friday.dayOfWeek('en'), 'Friday');
      assert.equal( saturday.dayOfWeek('en'), 'Saturday');
    });

    it('should return day of week as given format: ja', function() {
      var sunday    = new ExtDate(2017, 3, 5);
      var monday    = new ExtDate(2017, 3, 6);
      var tuesday   = new ExtDate(2017, 3, 7);
      var wednesday = new ExtDate(2017, 3, 8);
      var thursday  = new ExtDate(2017, 3, 9);
      var friday    = new ExtDate(2017, 3, 10);
      var saturday  = new ExtDate(2017, 3, 11);
      assert.equal(sunday.dayOfWeek('ja'), '日曜日');
      assert.equal(monday.dayOfWeek('ja'), '月曜日');
      assert.equal(tuesday.dayOfWeek('ja'), '火曜日');
      assert.equal(wednesday.dayOfWeek('ja'), '水曜日');
      assert.equal(thursday.dayOfWeek('ja'), '木曜日');
      assert.equal(friday.dayOfWeek('ja'), '金曜日');
      assert.equal(saturday.dayOfWeek('ja'), '土曜日');
    });
  });

  describe('#dayOfWeekInShort(format?: string): string', function() {
    it('should return day of week in short as given format: en', function() {
      var sunday    = new ExtDate(2017, 3, 5);
      var monday    = new ExtDate(2017, 3, 6);
      var tuesday   = new ExtDate(2017, 3, 7);
      var wednesday = new ExtDate(2017, 3, 8);
      var thursday  = new ExtDate(2017, 3, 9);
      var friday    = new ExtDate(2017, 3, 10);
      var saturday  = new ExtDate(2017, 3, 11);
      assert.equal(sunday.dayOfWeekInShort('en'), 'Sun');
      assert.equal(monday.dayOfWeekInShort('en'), 'Mon');
      assert.equal(tuesday.dayOfWeekInShort('en'), 'Tue');
      assert.equal(wednesday.dayOfWeekInShort('en'), 'Wed');
      assert.equal(thursday.dayOfWeekInShort('en'), 'Thu');
      assert.equal(friday.dayOfWeekInShort('en'), 'Fri');
      assert.equal(saturday.dayOfWeekInShort('en'), 'Sat');
    });

    it('should return day of week in short as given format: ja', function() {
      var sunday    = new ExtDate(2017, 3, 5);
      var monday    = new ExtDate(2017, 3, 6);
      var tuesday   = new ExtDate(2017, 3, 7);
      var wednesday = new ExtDate(2017, 3, 8);
      var thursday  = new ExtDate(2017, 3, 9);
      var friday    = new ExtDate(2017, 3, 10);
      var saturday  = new ExtDate(2017, 3, 11);
      assert.equal(sunday.dayOfWeekInShort('ja'), '日');
      assert.equal(monday.dayOfWeekInShort('ja'), '月');
      assert.equal(tuesday.dayOfWeekInShort('ja'), '火');
      assert.equal(wednesday.dayOfWeekInShort('ja'), '水');
      assert.equal(thursday.dayOfWeekInShort('ja'), '木');
      assert.equal(friday.dayOfWeekInShort('ja'), '金');
      assert.equal(saturday.dayOfWeekInShort('ja'), '土');
    });
  });

  describe('#toArray(): number[]', function() {
    it('should return array of length of 7', function() {
      assert.equal(currentExtDate.toArray().length, 7);
    });

    it('should return array whose elements are year, month, ..., milisecond accordingly', function() {
      let dateArray = currentExtDate.toArray();
      assert.equal(dateArray[0], currentExtDate.year());
      assert.equal(dateArray[1], currentExtDate.month());
      assert.equal(dateArray[2], currentExtDate.day());
      assert.equal(dateArray[3], currentExtDate.hour());
      assert.equal(dateArray[4], currentExtDate.minute());
      assert.equal(dateArray[5], currentExtDate.second());
      assert.equal(dateArray[6], currentExtDate.miliSecond());
    });
  });

  describe('#nextSecond(): ExtDate', function() {
    it('should return the next second', function() {
      var now = new ExtDate(2017, 3, 8, 12, 0, 0);
      var nextSecond = now.nextSecond();
      assert.equal(nextSecond.year(), 2017);
      assert.equal(nextSecond.month(), 3);
      assert.equal(nextSecond.day(), 8);
      assert.equal(nextSecond.hour(), 12);
      assert.equal(nextSecond.minute(), 0);
      assert.equal(nextSecond.second(), 1);
    });

    it('should return the next hour even if minute changes', function() {
      var now = new ExtDate(2017, 3, 8, 12, 0, 59);
      var nextSecond = now.nextSecond();
      assert.equal(nextSecond.year(), 2017);
      assert.equal(nextSecond.month(), 3);
      assert.equal(nextSecond.day(), 8);
      assert.equal(nextSecond.hour(), 12);
      assert.equal(nextSecond.minute(), 1);
      assert.equal(nextSecond.second(), 0);
    });

    it('should return the next hour even if hour changes', function() {
      var now = new ExtDate(2017, 3, 8, 12, 59, 59);
      var nextSecond = now.nextSecond();
      assert.equal(nextSecond.year(), 2017);
      assert.equal(nextSecond.month(), 3);
      assert.equal(nextSecond.day(), 8);
      assert.equal(nextSecond.hour(), 13);
      assert.equal(nextSecond.minute(), 0);
      assert.equal(nextSecond.second(), 0);
    });

    it('should return the next hour even if day changes', function() {
      var now = new ExtDate(2017, 3, 8, 23, 59, 59);
      var nextSecond = now.nextSecond();
      assert.equal(nextSecond.year(), 2017);
      assert.equal(nextSecond.month(), 3);
      assert.equal(nextSecond.day(), 9);
      assert.equal(nextSecond.hour(), 0);
      assert.equal(nextSecond.minute(), 0);
      assert.equal(nextSecond.second(), 0);
    });

    it('should return the next hour even if month changes', function() {
      var now = new ExtDate(2017, 3, 31, 23, 59, 59);
      var nextSecond = now.nextSecond();
      assert.equal(nextSecond.year(), 2017);
      assert.equal(nextSecond.month(), 4);
      assert.equal(nextSecond.day(), 1);
      assert.equal(nextSecond.hour(), 0);
      assert.equal(nextSecond.minute(), 0);
      assert.equal(nextSecond.second(), 0);
    });

    it('should return the next hour even if year changes', function() {
      var now = new ExtDate(2017, 12, 31, 23, 59, 59);
      var nextSecond = now.nextSecond();
      assert.equal(nextSecond.year(), 2018);
      assert.equal(nextSecond.month(), 1);
      assert.equal(nextSecond.day(), 1);
      assert.equal(nextSecond.hour(), 0);
      assert.equal(nextSecond.minute(), 0);
      assert.equal(nextSecond.second(), 0);
    });

    it('should increase the number of given hours', function() {
      var now = new ExtDate(2017, 3, 8, 10, 0, 0);
      var nextSecond = now.nextSecond(3);
      assert.equal(nextSecond.year(), 2017);
      assert.equal(nextSecond.month(), 3);
      assert.equal(nextSecond.day(), 8);
      assert.equal(nextSecond.hour(), 10);
      assert.equal(nextSecond.minute(), 0);
      assert.equal(nextSecond.second(), 3);
    });

    it('should decrease the number of given hours', function() {
      var now = new ExtDate(2017, 3, 8, 10, 0, 10);
      var nextSecond = now.nextSecond(-3);
      assert.equal(nextSecond.year(), 2017);
      assert.equal(nextSecond.month(), 3);
      assert.equal(nextSecond.day(), 8);
      assert.equal(nextSecond.hour(), 10);
      assert.equal(nextSecond.minute(), 0);
      assert.equal(nextSecond.second(), 7);
    });
  });

  describe('#nextMinute(): ExtDate', function() {
    it('should return the next minute', function() {
      var now = new ExtDate(2017, 3, 8, 12, 0, 0);
      var nextMinute = now.nextMinute();
      assert.equal(nextMinute.year(), 2017);
      assert.equal(nextMinute.month(), 3);
      assert.equal(nextMinute.day(), 8);
      assert.equal(nextMinute.hour(), 12);
      assert.equal(nextMinute.minute(), 1);
      assert.equal(nextMinute.second(), 0);
    });

    it('should return the next hour even if hour changes', function() {
      var now = new ExtDate(2017, 3, 8, 12, 59, 0);
      var nextMinute = now.nextMinute();
      assert.equal(nextMinute.year(), 2017);
      assert.equal(nextMinute.month(), 3);
      assert.equal(nextMinute.day(), 8);
      assert.equal(nextMinute.hour(), 13);
      assert.equal(nextMinute.minute(), 0);
      assert.equal(nextMinute.second(), 0);
    });

    it('should return the next hour even if day changes', function() {
      var now = new ExtDate(2017, 3, 8, 23, 59, 0);
      var nextMinute = now.nextMinute();
      assert.equal(nextMinute.year(), 2017);
      assert.equal(nextMinute.month(), 3);
      assert.equal(nextMinute.day(), 9);
      assert.equal(nextMinute.hour(), 0);
      assert.equal(nextMinute.minute(), 0);
      assert.equal(nextMinute.second(), 0);
    });

    it('should return the next hour even if month changes', function() {
      var now = new ExtDate(2017, 3, 31, 23, 59, 0);
      var nextMinute = now.nextMinute();
      assert.equal(nextMinute.year(), 2017);
      assert.equal(nextMinute.month(), 4);
      assert.equal(nextMinute.day(), 1);
      assert.equal(nextMinute.hour(), 0);
      assert.equal(nextMinute.minute(), 0);
      assert.equal(nextMinute.second(), 0);
    });

    it('should return the next hour even if year changes', function() {
      var now = new ExtDate(2017, 12, 31, 23, 59, 0);
      var nextMinute = now.nextMinute();
      assert.equal(nextMinute.year(), 2018);
      assert.equal(nextMinute.month(), 1);
      assert.equal(nextMinute.day(), 1);
      assert.equal(nextMinute.hour(), 0);
      assert.equal(nextMinute.minute(), 0);
      assert.equal(nextMinute.second(), 0);
    });

    it('should increase the number of given hours', function() {
      var now = new ExtDate(2017, 3, 8, 10, 0, 0);
      var nextMinute = now.nextMinute(3);
      assert.equal(nextMinute.year(), 2017);
      assert.equal(nextMinute.month(), 3);
      assert.equal(nextMinute.day(), 8);
      assert.equal(nextMinute.hour(), 10);
      assert.equal(nextMinute.minute(), 3);
      assert.equal(nextMinute.second(), 0);
    });

    it('should decrease the number of given hours', function() {
      var now = new ExtDate(2017, 3, 8, 10, 10, 0);
      var nextMinute = now.nextMinute(-3);
      assert.equal(nextMinute.year(), 2017);
      assert.equal(nextMinute.month(), 3);
      assert.equal(nextMinute.day(), 8);
      assert.equal(nextMinute.hour(), 10);
      assert.equal(nextMinute.minute(), 7);
      assert.equal(nextMinute.second(), 0);
    });
  });

  describe('#nextHour(): ExtDate', function() {
    it('should return the next hour', function() {
      var now = new ExtDate(2017, 3, 8, 12, 0, 0);
      var nextHour = now.nextHour();
      assert.equal(nextHour.year(), 2017);
      assert.equal(nextHour.month(), 3);
      assert.equal(nextHour.day(), 8);
      assert.equal(nextHour.hour(), 13);
      assert.equal(nextHour.minute(), 0);
      assert.equal(nextHour.second(), 0);
    });

    it('should return the next hour even if day changes', function() {
      var now = new ExtDate(2017, 3, 8, 23, 30, 0);
      var nextHour = now.nextHour();
      assert.equal(nextHour.year(), 2017);
      assert.equal(nextHour.month(), 3);
      assert.equal(nextHour.day(), 9);
      assert.equal(nextHour.hour(), 0);
      assert.equal(nextHour.minute(), 30);
      assert.equal(nextHour.second(), 0);
    });

    it('should return the next hour even if month changes', function() {
      var now = new ExtDate(2017, 3, 31, 23, 30, 0);
      var nextHour = now.nextHour();
      assert.equal(nextHour.year(), 2017);
      assert.equal(nextHour.month(), 4);
      assert.equal(nextHour.day(), 1);
      assert.equal(nextHour.hour(), 0);
      assert.equal(nextHour.minute(), 30);
      assert.equal(nextHour.second(), 0);
    });

    it('should return the next hour even if year changes', function() {
      var now = new ExtDate(2017, 12, 31, 23, 30, 0);
      var nextHour = now.nextHour();
      assert.equal(nextHour.year(), 2018);
      assert.equal(nextHour.month(), 1);
      assert.equal(nextHour.day(), 1);
      assert.equal(nextHour.hour(), 0);
      assert.equal(nextHour.minute(), 30);
      assert.equal(nextHour.second(), 0);
    });

    it('should increase the number of given hours', function() {
      var now = new ExtDate(2017, 3, 8, 10, 0, 0);
      var nextHour = now.nextHour(3);
      assert.equal(nextHour.year(), 2017);
      assert.equal(nextHour.month(), 3);
      assert.equal(nextHour.day(), 8);
      assert.equal(nextHour.hour(), 13);
      assert.equal(nextHour.minute(), 0);
      assert.equal(nextHour.second(), 0);
    });

    it('should decrease the number of given hours', function() {
      var now = new ExtDate(2017, 3, 8, 10, 0, 0);
      var nextHour = now.nextHour(-3);
      assert.equal(nextHour.year(), 2017);
      assert.equal(nextHour.month(), 3);
      assert.equal(nextHour.day(), 8);
      assert.equal(nextHour.hour(), 7);
      assert.equal(nextHour.minute(), 0);
      assert.equal(nextHour.second(), 0);
    });
  });

  describe('#nextDay(): ExtDate', function() {
    it('should return the next day of ordinary day', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextDay();
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 3);
      assert.equal(nextDay.day(), 9);
    });

    it('should return the next day even if month changes', function() {
      var today = new ExtDate(2017, 3, 31);
      var nextDay = today.nextDay();
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 4);
      assert.equal(nextDay.day(), 1);
    });

    it('should return the next day even if year changes', function() {
      var today = new ExtDate(2017, 12, 31);
      var nextDay = today.nextDay();
      assert.equal(nextDay.year(), 2018);
      assert.equal(nextDay.month(), 1);
      assert.equal(nextDay.day(), 1);
    });

    it('should increase the number of given days', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextDay(3);
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 3);
      assert.equal(nextDay.day(), 11);
    });

    it('should decrease the number of given days', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextDay(-3);
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 3);
      assert.equal(nextDay.day(), 5);
    });
  });

  describe('#nextWeek(): ExtDate', function() {
    it('should return the next week', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextWeek();
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 3);
      assert.equal(nextDay.day(), 15);
    });

    it('should return the next week even if month changes', function() {
      var today = new ExtDate(2017, 3, 31);
      var nextDay = today.nextWeek();
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 4);
      assert.equal(nextDay.day(), 7);
    });

    it('should return the next week even if year changes', function() {
      var today = new ExtDate(2017, 12, 31);
      var nextDay = today.nextWeek();
      assert.equal(nextDay.year(), 2018);
      assert.equal(nextDay.month(), 1);
      assert.equal(nextDay.day(), 7);
    });

    it('should increase the number of given weeks', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextWeek(3);
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 3);
      assert.equal(nextDay.day(), 29);
    });

    it('should decrease the number of given weeks', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextWeek(-3);
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 2);
      assert.equal(nextDay.day(), 15);
    });
  });

  describe('#nextMonth(): ExtDate', function() {
    it('should return the next month', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextMonth();
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 4);
      assert.equal(nextDay.day(), 8);
    });

    it('should return the next month even if month changes', function() {
      var today = new ExtDate(2017, 3, 31);
      var nextDay = today.nextMonth();
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 5);
      assert.equal(nextDay.day(), 1);
    });

    it('should return the next month even if year changes', function() {
      var today = new ExtDate(2017, 12, 31);
      var nextDay = today.nextMonth();
      assert.equal(nextDay.year(), 2018);
      assert.equal(nextDay.month(), 1);
      assert.equal(nextDay.day(), 31);
    });

    it('should increase the number of given months', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextMonth(3);
      assert.equal(nextDay.year(), 2017);
      assert.equal(nextDay.month(), 6);
      assert.equal(nextDay.day(), 8);
    });

    it('should decrease the number of given months', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextMonth(-3);
      assert.equal(nextDay.year(), 2016);
      assert.equal(nextDay.month(), 12);
      assert.equal(nextDay.day(), 8);
    });
  });

  describe('#nextYear(): ExtDate', function() {
    it('should return the next year', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextYear();
      assert.equal(nextDay.year(), 2018);
      assert.equal(nextDay.month(), 3);
      assert.equal(nextDay.day(), 8);
    });

    it('should increase the number of given years', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextYear(3);
      assert.equal(nextDay.year(), 2020);
      assert.equal(nextDay.month(), 3);
      assert.equal(nextDay.day(), 8);
    });

    it('should decrease the number of given years', function() {
      var today = new ExtDate(2017, 3, 8);
      var nextDay = today.nextYear(-3);
      assert.equal(nextDay.year(), 2014);
      assert.equal(nextDay.month(), 3);
      assert.equal(nextDay.day(), 8);
    });
  });


  describe('#prevSecond(): ExtDate', function() {
    it('should return the previous second', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevSecond = now.prevSecond();
      assert.equal(prevSecond.year(), 2017);
      assert.equal(prevSecond.month(), 3);
      assert.equal(prevSecond.day(), 8);
      assert.equal(prevSecond.hour(), 12);
      assert.equal(prevSecond.minute(), 34);
      assert.equal(prevSecond.second(), 55);
    });

    it('should return the previous second even if minute changes', function() {
      var now = new ExtDate(2017, 3, 8, 12, 0, 0);
      var prevSecond = now.prevSecond();
      assert.equal(prevSecond.year(), 2017);
      assert.equal(prevSecond.month(), 3);
      assert.equal(prevSecond.day(), 8);
      assert.equal(prevSecond.hour(), 11);
      assert.equal(prevSecond.minute(), 59);
      assert.equal(prevSecond.second(), 59);
    });

    it('should return the previous second even if hour changes', function() {
      var now = new ExtDate(2017, 3, 8, 12, 0, 0);
      var prevSecond = now.prevSecond();
      assert.equal(prevSecond.year(), 2017);
      assert.equal(prevSecond.month(), 3);
      assert.equal(prevSecond.day(), 8);
      assert.equal(prevSecond.hour(), 11);
      assert.equal(prevSecond.minute(), 59);
      assert.equal(prevSecond.second(), 59);
    });

    it('should return the previous second even if day changes', function() {
      var now = new ExtDate(2017, 3, 8, 0, 0, 0);
      var prevSecond = now.prevSecond();
      assert.equal(prevSecond.year(), 2017);
      assert.equal(prevSecond.month(), 3);
      assert.equal(prevSecond.day(), 7);
      assert.equal(prevSecond.hour(), 23);
      assert.equal(prevSecond.minute(), 59);
      assert.equal(prevSecond.second(), 59);
    });

    it('should return the previous second even if month changes', function() {
      var now = new ExtDate(2017, 3, 1, 0, 0, 0);
      var prevSecond = now.prevSecond();
      assert.equal(prevSecond.year(), 2017);
      assert.equal(prevSecond.month(), 2);
      assert.equal(prevSecond.day(), 28);
      assert.equal(prevSecond.hour(), 23);
      assert.equal(prevSecond.minute(), 59);
      assert.equal(prevSecond.second(), 59);
    });

    it('should return the previous second even if year changes', function() {
      var now = new ExtDate(2017, 1, 1, 0, 0, 0);
      var prevSecond = now.prevSecond();
      assert.equal(prevSecond.year(), 2016);
      assert.equal(prevSecond.month(), 12);
      assert.equal(prevSecond.day(), 31);
      assert.equal(prevSecond.hour(), 23);
      assert.equal(prevSecond.minute(), 59);
      assert.equal(prevSecond.second(), 59);
    });

    it('should decrease the number of given seconds', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevSecond = now.prevSecond(3);
      assert.equal(prevSecond.year(), 2017);
      assert.equal(prevSecond.month(), 3);
      assert.equal(prevSecond.day(), 8);
      assert.equal(prevSecond.hour(), 12);
      assert.equal(prevSecond.minute(), 34);
      assert.equal(prevSecond.second(), 53);
    });

    it('should increase the number of given seconds', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevSecond = now.prevSecond(-3);
      assert.equal(prevSecond.year(), 2017);
      assert.equal(prevSecond.month(), 3);
      assert.equal(prevSecond.day(), 8);
      assert.equal(prevSecond.hour(), 12);
      assert.equal(prevSecond.minute(), 34);
      assert.equal(prevSecond.second(), 59);
    });
  });

  describe('#prevMinute(): ExtDate', function() {
    it('should return the previous minute', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevMinute = now.prevMinute();
      assert.equal(prevMinute.year(), 2017);
      assert.equal(prevMinute.month(), 3);
      assert.equal(prevMinute.day(), 8);
      assert.equal(prevMinute.hour(), 12);
      assert.equal(prevMinute.minute(), 33);
      assert.equal(prevMinute.second(), 56);
    });

    it('should return the previous minute even if hour changes', function() {
      var now = new ExtDate(2017, 3, 8, 12, 0, 56);
      var prevMinute = now.prevMinute();
      assert.equal(prevMinute.year(), 2017);
      assert.equal(prevMinute.month(), 3);
      assert.equal(prevMinute.day(), 8);
      assert.equal(prevMinute.hour(), 11);
      assert.equal(prevMinute.minute(), 59);
      assert.equal(prevMinute.second(), 56);
    });

    it('should return the previous minute even if day changes', function() {
      var now = new ExtDate(2017, 3, 8, 0, 0, 56);
      var prevMinute = now.prevMinute();
      assert.equal(prevMinute.year(), 2017);
      assert.equal(prevMinute.month(), 3);
      assert.equal(prevMinute.day(), 7);
      assert.equal(prevMinute.hour(), 23);
      assert.equal(prevMinute.minute(), 59);
      assert.equal(prevMinute.second(), 56);
    });

    it('should return the previous minute even if month changes', function() {
      var now = new ExtDate(2017, 3, 1, 0, 0, 56);
      var prevMinute = now.prevMinute();
      assert.equal(prevMinute.year(), 2017);
      assert.equal(prevMinute.month(), 2);
      assert.equal(prevMinute.day(), 28);
      assert.equal(prevMinute.hour(), 23);
      assert.equal(prevMinute.minute(), 59);
      assert.equal(prevMinute.second(), 56);
    });

    it('should return the previous minute even if year changes', function() {
      var now = new ExtDate(2017, 1, 1, 0, 0, 56);
      var prevMinute = now.prevMinute();
      assert.equal(prevMinute.year(), 2016);
      assert.equal(prevMinute.month(), 12);
      assert.equal(prevMinute.day(), 31);
      assert.equal(prevMinute.hour(), 23);
      assert.equal(prevMinute.minute(), 59);
      assert.equal(prevMinute.second(), 56);
    });

    it('should decrease the number of given minutes', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevMinute = now.prevMinute(3);
      assert.equal(prevMinute.year(), 2017);
      assert.equal(prevMinute.month(), 3);
      assert.equal(prevMinute.day(), 8);
      assert.equal(prevMinute.hour(), 12);
      assert.equal(prevMinute.minute(), 31);
      assert.equal(prevMinute.second(), 56);
    });

    it('should increase the number of given minutes', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevMinute = now.prevMinute(-3);
      assert.equal(prevMinute.year(), 2017);
      assert.equal(prevMinute.month(), 3);
      assert.equal(prevMinute.day(), 8);
      assert.equal(prevMinute.hour(), 12);
      assert.equal(prevMinute.minute(), 37);
      assert.equal(prevMinute.second(), 56);
    });
  });

  describe('#prevHour(): ExtDate', function() {
    it('should return the previous hour', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevHour = now.prevHour();
      assert.equal(prevHour.year(), 2017);
      assert.equal(prevHour.month(), 3);
      assert.equal(prevHour.day(), 8);
      assert.equal(prevHour.hour(), 11);
      assert.equal(prevHour.minute(), 34);
      assert.equal(prevHour.second(), 56);
    });

    it('should return the previous hour even if day changes', function() {
      var now = new ExtDate(2017, 3, 8, 0, 34, 56);
      var prevHour = now.prevHour();
      assert.equal(prevHour.year(), 2017);
      assert.equal(prevHour.month(), 3);
      assert.equal(prevHour.day(), 7);
      assert.equal(prevHour.hour(), 23);
      assert.equal(prevHour.minute(), 34);
      assert.equal(prevHour.second(), 56);
    });

    it('should return the previous hour even if month changes', function() {
      var now = new ExtDate(2017, 3, 1, 0, 34, 56);
      var prevHour = now.prevHour();
      assert.equal(prevHour.year(), 2017);
      assert.equal(prevHour.month(), 2);
      assert.equal(prevHour.day(), 28);
      assert.equal(prevHour.hour(), 23);
      assert.equal(prevHour.minute(), 34);
      assert.equal(prevHour.second(), 56);
    });

    it('should return the previous hour even if year changes', function() {
      var now = new ExtDate(2017, 1, 1, 0, 34, 56);
      var prevHour = now.prevHour();
      assert.equal(prevHour.year(), 2016);
      assert.equal(prevHour.month(), 12);
      assert.equal(prevHour.day(), 31);
      assert.equal(prevHour.hour(), 23);
      assert.equal(prevHour.minute(), 34);
      assert.equal(prevHour.second(), 56);
    });

    it('should decrease the number of given hours', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevHour = now.prevHour(3);
      assert.equal(prevHour.year(), 2017);
      assert.equal(prevHour.month(), 3);
      assert.equal(prevHour.day(), 8);
      assert.equal(prevHour.hour(), 9);
      assert.equal(prevHour.minute(), 34);
      assert.equal(prevHour.second(), 56);
    });

    it('should increase the number of given hours', function() {
      var now = new ExtDate(2017, 3, 8, 12, 34, 56);
      var prevHour = now.prevHour(-3);
      assert.equal(prevHour.year(), 2017);
      assert.equal(prevHour.month(), 3);
      assert.equal(prevHour.day(), 8);
      assert.equal(prevHour.hour(), 15);
      assert.equal(prevHour.minute(), 34);
      assert.equal(prevHour.second(), 56);
    });
  });

  describe('#prevDay(): ExtDate', function() {
    it('should return the prev day of ordinary day', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevDay();
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 7);
    });

    it('should return the prev day even if month changes', function() {
      var today = new ExtDate(2017, 3, 1);
      var prevDay = today.prevDay();
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 2);
      assert.equal(prevDay.day(), 28);
    });

    it('should return the prev day even if year changes', function() {
      var today = new ExtDate(2017, 1, 1);
      var prevDay = today.prevDay();
      assert.equal(prevDay.year(), 2016);
      assert.equal(prevDay.month(), 12);
      assert.equal(prevDay.day(), 31);
    });

    it('should decrease the number of given days', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevDay(3);
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 5);
    });

    it('should increase the number of given days', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevDay(-3);
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 11);
    });
  });

  describe('#prevWeek(): ExtDate', function() {
    it('should return the prev week of ordinary day', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevWeek();
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 1);
    });

    it('should return the prev week even if month changes', function() {
      var today = new ExtDate(2017, 3, 1);
      var prevDay = today.prevWeek();
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 2);
      assert.equal(prevDay.day(), 22);
    });

    it('should return the prev week even if year changes', function() {
      var today = new ExtDate(2017, 1, 1);
      var prevDay = today.prevWeek();
      assert.equal(prevDay.year(), 2016);
      assert.equal(prevDay.month(), 12);
      assert.equal(prevDay.day(), 25);
    });

    it('should decrease the number of given weeks', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevWeek(3);
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 2);
      assert.equal(prevDay.day(), 15);
    });

    it('should increase the number of given weeks', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevWeek(-3);
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 29);
    });
  });

  describe('#prevMonth(): ExtDate', function() {
    it('should return the prev month of ordinary day', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevMonth();
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 2);
      assert.equal(prevDay.day(), 8);
    });

    it('should return the prev month even if month changes', function() {
      var today = new ExtDate(2017, 3, 31);
      var prevDay = today.prevMonth();
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 3);
    });

    it('should return the prev month even if year changes', function() {
      var today = new ExtDate(2017, 1, 1);
      var prevDay = today.prevMonth();
      assert.equal(prevDay.year(), 2016);
      assert.equal(prevDay.month(), 12);
      assert.equal(prevDay.day(), 1);
    });

    it('should decrease the number of given months', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevMonth(3);
      assert.equal(prevDay.year(), 2016);
      assert.equal(prevDay.month(), 12);
      assert.equal(prevDay.day(), 8);
    });

    it('should increase the number of given months', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevMonth(-3);
      assert.equal(prevDay.year(), 2017);
      assert.equal(prevDay.month(), 6);
      assert.equal(prevDay.day(), 8);
    });
  });

  describe('#prevYear(): ExtDate', function() {
    it('should return the prev year of ordinary day', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevYear();
      assert.equal(prevDay.year(), 2016);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 8);
    });

    it('should decrease the number of given years', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevYear(3);
      assert.equal(prevDay.year(), 2014);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 8);
    });

    it('should increase the number of given years', function() {
      var today = new ExtDate(2017, 3, 8);
      var prevDay = today.prevYear(-3);
      assert.equal(prevDay.year(), 2020);
      assert.equal(prevDay.month(), 3);
      assert.equal(prevDay.day(), 8);
    });
  });

  describe('#beginningOfDay(): ExtDate', function() {
    it('should return the beginning of day', function() {
      var beginning = currentExtDate.beginningOfDay();
      assert.equal(beginning.year(), currentExtDate.year());
      assert.equal(beginning.month(), currentExtDate.month());
      assert.equal(beginning.day(), currentExtDate.day());
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });
  });

  describe('#beginningOfWeek(): ExtDate', function() {
    it('should return the beginning of week', function() {
      var date = new ExtDate(2017, 3, 8);
      var beginning = date.beginningOfWeek();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 3);
      assert.equal(beginning.day(), 5);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });

    it('should return the beginning of week even if the target date is beginning of week', function() {
      var date = new ExtDate(2017, 3, 5);
      var beginning = date.beginningOfWeek();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 3);
      assert.equal(beginning.day(), 5);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });

    it('should return the beginning of week even if the target date is end of week', function() {
      var date = new ExtDate(2017, 3, 11);
      var beginning = date.beginningOfWeek();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 3);
      assert.equal(beginning.day(), 5);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });
  });

  describe('#beginningOfMonth(): ExtDate', function() {
    it('should return the beginning of month', function() {
      var date = new ExtDate(2017, 3, 8);
      var beginning = date.beginningOfMonth();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 3);
      assert.equal(beginning.day(), 1);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });

    it('should return the beginning of month even if the target date is beginning of month', function() {
      var date = new ExtDate(2017, 3, 1);
      var beginning = date.beginningOfMonth();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 3);
      assert.equal(beginning.day(), 1);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });

    it('should return the beginning of month even if the target date is end of month', function() {
      var date = new ExtDate(2017, 3, 31);
      var beginning = date.beginningOfMonth();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 3);
      assert.equal(beginning.day(), 1);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });
  });

  describe('#beginningOfYear(): ExtDate', function() {
    it('should return the beginning of year', function() {
      var date = new ExtDate(2017, 3, 8);
      var beginning = date.beginningOfYear();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 1);
      assert.equal(beginning.day(), 1);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });

    it('should return the beginning of year even if the target date is beginning of year', function() {
      var date = new ExtDate(2017, 1, 1);
      var beginning = date.beginningOfYear();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 1);
      assert.equal(beginning.day(), 1);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });

    it('should return the beginning of year even if the target date is end of year', function() {
      var date = new ExtDate(2017, 12, 31);
      var beginning = date.beginningOfYear();
      assert.equal(beginning.year(), 2017);
      assert.equal(beginning.month(), 1);
      assert.equal(beginning.day(), 1);
      assert.equal(beginning.hour(), 0);
      assert.equal(beginning.minute(), 0);
      assert.equal(beginning.second(), 0);
      assert.equal(beginning.miliSecond(), 0);
    });
  });

  describe('#endOfDay(): ExtDate', function() {
    it('should return the end of day', function() {
      var end = currentExtDate.endOfDay();
      assert.equal(end.year(), currentExtDate.year());
      assert.equal(end.month(), currentExtDate.month());
      assert.equal(end.day(), currentExtDate.day());
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });
  });

  describe('#endOfWeek(): ExtDate', function() {
    it('should return the end of week', function() {
      var date = new ExtDate(2017, 3, 8);
      var end = date.endOfWeek();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 3);
      assert.equal(end.day(), 11);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });

    it('should return the end of week even if the target date is beginning of week', function() {
      var date = new ExtDate(2017, 3, 5);
      var end = date.endOfWeek();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 3);
      assert.equal(end.day(), 11);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });

    it('should return the beginning of week even if the target date is end of week', function() {
      var date = new ExtDate(2017, 3, 11);
      var end = date.endOfWeek();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 3);
      assert.equal(end.day(), 11);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });
  });

  describe('#endOfMonth(): ExtDate', function() {
    it('should return the end of month', function() {
      var date = new ExtDate(2017, 3, 8);
      var end = date.endOfMonth();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 3);
      assert.equal(end.day(), 31);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });

    it('should return the end of month even if the target date is beginning of month', function() {
      var date = new ExtDate(2017, 3, 1);
      var end = date.endOfMonth();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 3);
      assert.equal(end.day(), 31);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });

    it('should return the beginning of month even if the target date is end of month', function() {
      var date = new ExtDate(2017, 3, 31);
      var end = date.endOfMonth();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 3);
      assert.equal(end.day(), 31);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });
  });

  describe('#endOfYear(): ExtDate', function() {
    it('should return the end of year', function() {
      var date = new ExtDate(2017, 3, 8);
      var end = date.endOfYear();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 12);
      assert.equal(end.day(), 31);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });

    it('should return the end of year even if the target date is beginning of year', function() {
      var date = new ExtDate(2017, 1, 1);
      var end = date.endOfYear();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 12);
      assert.equal(end.day(), 31);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });

    it('should return the beginning of year even if the target date is end of year', function() {
      var date = new ExtDate(2017, 12, 31);
      var end = date.endOfYear();
      assert.equal(end.year(), 2017);
      assert.equal(end.month(), 12);
      assert.equal(end.day(), 31);
      assert.equal(end.hour(), 23);
      assert.equal(end.minute(), 59);
      assert.equal(end.second(), 59);
      assert.equal(end.miliSecond(), 999);
    });
  });

  describe('#strftime(formatString: string, lang?: string): string', function() {
    it('should embed time with appropriate format: en', function() {
      var date = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      assert.equal(date.strftime("%Y/%m/%d %H:%M:%S %L (%a - %A)"), "2017/03/08 12:34:56 789 (Wednesday - Wed)");
    });

    it('should embed time with appropriate format: ja', function() {
      var date = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      assert.equal(date.strftime("%Y/%m/%d %H:%M:%S %L (%a - %A)", 'ja'), "2017/03/08 12:34:56 789 (水曜日 - 水)");
    });
  });

  describe('#isSameDay(date: ExtDate): boolean', function() {
    it('should return true if given 2 days are same day', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2017, 3, 8, 1, 23, 45, 0);
      assert.equal(dateA.isSameDay(dateB), true);
      assert.equal(dateB.isSameDay(dateA), true);
    });

    it('should return false if given 2 days are different', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2017, 3, 9, 12, 34, 56, 789);
      assert.equal(dateA.isSameDay(dateB), false);
      assert.equal(dateB.isSameDay(dateA), false);
    });

    it('should return false if given 2 days have same dates but months or years differ', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2020, 3, 8, 12, 34, 56, 789);
      var dateC = new ExtDate(2017, 6, 8, 12, 34, 56, 789);
      assert.equal(dateA.isSameDay(dateB), false);
      assert.equal(dateB.isSameDay(dateA), false);
      assert.equal(dateA.isSameDay(dateC), false);
      assert.equal(dateC.isSameDay(dateA), false);
    });
  });

  describe('#isSameWeek(date: ExtDate): boolean', function() {
    it('should return true if given 2 days are in same week', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2017, 3, 8, 1, 3, 5, 789);
      var dateC = new ExtDate(2017, 3, 5);
      var dateD = new ExtDate(2017, 3, 11);
      assert.equal(dateA.isSameWeek(dateB), true);
      assert.equal(dateB.isSameWeek(dateA), true);
      assert.equal(dateA.isSameWeek(dateC), true);
      assert.equal(dateC.isSameWeek(dateA), true);
      assert.equal(dateA.isSameWeek(dateD), true);
      assert.equal(dateD.isSameWeek(dateA), true);
    });

    it('should return false if given 2 days are not in same week', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2017, 3, 4);
      var dateC = new ExtDate(2017, 3, 12);
      var dateD = new ExtDate(2020, 3, 8);
      assert.equal(dateA.isSameWeek(dateB), false);
      assert.equal(dateB.isSameWeek(dateA), false);
      assert.equal(dateA.isSameWeek(dateC), false);
      assert.equal(dateC.isSameWeek(dateA), false);
      assert.equal(dateA.isSameWeek(dateD), false);
      assert.equal(dateD.isSameWeek(dateA), false);
    });

  });

  describe('#isSameMonth(date: ExtDate): boolean', function() {
    it('should return true if given 2 days are in same month', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2017, 3, 8, 1, 3, 5, 789);
      var dateC = new ExtDate(2017, 3, 1);
      var dateD = new ExtDate(2017, 3, 31);
      assert.equal(dateA.isSameMonth(dateB), true);
      assert.equal(dateB.isSameMonth(dateA), true);
      assert.equal(dateA.isSameMonth(dateC), true);
      assert.equal(dateC.isSameMonth(dateA), true);
      assert.equal(dateA.isSameMonth(dateD), true);
      assert.equal(dateD.isSameMonth(dateA), true);
    });

    it('should return false if given 2 days are not in same month', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2017, 2, 28);
      var dateC = new ExtDate(2017, 4, 1);
      var dateD = new ExtDate(2020, 3, 8);
      assert.equal(dateA.isSameMonth(dateB), false);
      assert.equal(dateB.isSameMonth(dateA), false);
      assert.equal(dateA.isSameMonth(dateC), false);
      assert.equal(dateC.isSameMonth(dateA), false);
      assert.equal(dateA.isSameMonth(dateD), false);
      assert.equal(dateD.isSameMonth(dateA), false);
    });
  });

  describe('#isSameYear(date: ExtDate): boolean', function() {
    it('should return true if given 2 days are in same year', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2017, 1, 1, 1, 3, 5, 789);
      var dateC = new ExtDate(2017, 12, 31);
      var dateD = new ExtDate(2017, 3, 8);
      assert.equal(dateA.isSameYear(dateB), true);
      assert.equal(dateB.isSameYear(dateA), true);
      assert.equal(dateA.isSameYear(dateC), true);
      assert.equal(dateC.isSameYear(dateA), true);
      assert.equal(dateA.isSameYear(dateD), true);
      assert.equal(dateD.isSameYear(dateA), true);
    });

    it('should return false if given 2 days are not in same year', function() {
      var dateA = new ExtDate(2017, 3, 8, 12, 34, 56, 789);
      var dateB = new ExtDate(2018, 2, 28);
      var dateC = new ExtDate(2016, 4, 1);
      var dateD = new ExtDate(2020, 3, 8);
      assert.equal(dateA.isSameYear(dateB), false);
      assert.equal(dateB.isSameYear(dateA), false);
      assert.equal(dateA.isSameYear(dateC), false);
      assert.equal(dateC.isSameYear(dateA), false);
      assert.equal(dateA.isSameYear(dateD), false);
      assert.equal(dateD.isSameYear(dateA), false);
    });
  });

});