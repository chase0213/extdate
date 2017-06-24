var assert = require('assert');
var ExtDate = require('../ExtDate').ExtDate;
var ExtInterval = require('../ExtInterval').ExtInterval;

var EPS = .01;

describe('ExtInterval', function() {

  //
  // initialize ExtInterval
  //

  var interval;

  var beginAt;
  var endAt;

  before(function() {
    beginAt = new ExtDate(2017, 6, 1, 0, 0, 0);
    endAt   = new ExtDate(2017, 6, 3, 10, 23, 0);
    interval = new ExtInterval(beginAt, endAt);
  });


  describe('#constructor(beginAt?: ExtDate, endAt?: ExtDate)', function() {
    it('should initialize ExtInterval instance by given date', function() {
      var extInterval = new ExtInterval(beginAt, endAt);
      var expected = ((2 * 24 + 10) * 60 + 23) * 60 * 1000;
      assert.equal(extInterval.interval, expected);
    });
  });

  describe('#asUnixTime()', function() {
    it('should return interval as unix time', function() {
      var expected = ((2 * 24 + 10) * 60 + 23) * 60 * 1000;
      assert.equal(interval.asUnixTime(), expected);
    });
  });

  describe('#asMiliSecond', function() {
    it('should return interval as mili seconds', function() {
      var expected = ((2 * 24 + 10) * 60 + 23) * 60 * 1000;
      assert.equal(interval.asMiliSecond(), expected);
    });
  });

  describe('#asSecond', function() {
    it('should return interval as seconds', function() {
      var expected = ((2 * 24 + 10) * 60 + 23) * 60.0;
      assert.equal(interval.asSecond(), expected);
    });
  });

  describe('#asMinute', function() {
    it('should return interval as minutes', function() {
      var expected = (2 * 24 + 10) * 60.0 + 23;
      assert.equal(interval.asMinute(), expected);
    });
  });

  describe('#asHour', function() {
    it('should return interval as hours', function() {
      var expected = 2 * 24 + 10 + 23 / 60.0;
      assert.equal(interval.asHour(), expected);
    });
  });

  describe('#asDay', function() {
    it('should return interval as days', function() {
      var expected = 2.0 + (10 + (23 / 60.0)) / 24.0;
      assert.equal(interval.asDay(), expected);
    });
  });

  describe('#asWeek', function() {
    it('should return interval as weeks', function() {
      var expected = (2.0 + (10 + (23 / 60.0)) / 24.0) / 7.0;
      assert.equal(interval.asWeek(), expected);
    });
  });

  describe('#asMonth', function() {
    it('should return interval as months', function() {
      var expected = (2.0 + (10 + (23 / 60.0)) / 24.0) / 30.0;
      var diff = interval.asMonth() - expected;
      assert.equal(diff < EPS, true);
    });
  });


  describe('#asYear', function() {
    it('should return interval as years', function() {
      var expected = (2.0 + (10 + (23 / 60.0)) / 24.0) / 365.0;
      var diff = interval.asYear() - expected;
      assert.equal(diff < EPS, true);
    });
  });

  describe('#compare', function() {
    it('should return an array composed of -1/0/1', function() {
      var expected = [0, 0, 1, 1, 1, 0, 0];
      assert.deepEqual(interval.compare(), expected);
    });
  });

  describe('#compareAt(level: number)', function() {
    it('should return -1/0/1 at the given level', function() {
      var expected = [0, 0, 1, 1, 1, 0, 0];
      assert.equal(interval.compareAt(0), expected[0]);
      assert.equal(interval.compareAt(1), expected[1]);
      assert.equal(interval.compareAt(2), expected[2]);
      assert.equal(interval.compareAt(3), expected[3]);
      assert.equal(interval.compareAt(4), expected[4]);
      assert.equal(interval.compareAt(5), expected[5]);
      assert.equal(interval.compareAt(6), expected[6]);
    });
  });

  describe('#setBeginAt(date: ExtDate)', function() {
    it('should set beginAt', function() {
      var date = new ExtDate();
      interval.setBeginAt(date);
      assert.equal(interval.beginAt, date);
    });
  });

  describe('#setEndAt(date: ExtDate)', function() {
    it('should set endAt', function() {
      var date = new ExtDate();
      interval.setEndAt(date);
      assert.equal(interval.endAt, date);
    });
  });

});