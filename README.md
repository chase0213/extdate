[![npm version](https://badge.fury.io/js/extdate.svg)](https://badge.fury.io/js/extdate)
[![Build Status](https://travis-ci.org/chase0213/extdate.svg?branch=master)](https://travis-ci.org/chase0213/extdate)
[![codecov](https://codecov.io/gh/chase0213/extdate/branch/master/graph/badge.svg)](https://codecov.io/gh/chase0213/extdate)

# ExtDate

ExtDate is a simple and lite module to deal with Date object in javascript (and typescript), strongly inspired by Rails "Date" and "Time" objects.

## Installation and Usage

### npm

```bash
npm install extdate
```

To import the ExtDate functionality:

```typescript
import { ExtDate } from 'extdate/lib/ExtDate'

// create ExtDate instance from year, month and day
let date: ExtDate = new ExtDate(2017, 3, 8);

// create ExtDate instance from today's date
let today: ExtDate = new ExtDate();

// create ExtDate instance from javascript's Date object
let dateFromJS: ExtDate = new ExtDate(new Date());
```

### Available methods

Available instance methods are as follows:

#### Getter/Setter

| method name | args => return value | description | active issue (if exists) |
| :--- | :--- | :--- | :---: |
| unixTime | () => number | returns unixtime | |
| miliSecond | () => number | returns the value at 'mili-second' digit | |
| second | () => number | returns the value at 'second' digit | |
| minute | () => number | returns the value at 'minute' digit | |
| hour | () => number | returns the value at 'hour' digit | |
| day | () => number | returns the value at 'day' digit | |
| month | () => number | returns the value at 'month' digit | |
| year | () => number | returns the value at 'year' digit | |
| dayOfWeek | (format?: string) => string | returns day of week in natural language (in `format` language) | |
| dayOfWeekInShort | (format?: string) => string |returns day of week in short in natural language (in `format` language) | |
| toArray | () => number[] | returns each digit of the date, `[2017, 3, 5, ...]` | |

#### Date Calculations

| method name | args => return value | description | active issue (if exists) |
| :--- | :--- | :--- | :---: |
| nextDay | (step?: number) => ExtDate | returns ExtDate object of `step`-day after (step is 1 if nothing given) | |
| nextWeek | (step?: number) => ExtDate | returns ExtDate object of `step`-week after (step is 1 if nothing given) | |
| nextMonth | (step?: number) => ExtDate | returns ExtDate object of `step`-month after (step is 1 if nothing given) | |
| nextYear | (step?: number) => ExtDate | returns ExtDate object of `step`-year after (step is 1 if nothing given) | |
| prevDay | (step?: number) => ExtDate | returns ExtDate object of `step`-day before (step is 1 if nothing given) | |
| prevWeek | (step?: number) => ExtDate | returns ExtDate object of `step`-week before (step is 1 if nothing given) | |
| prevMonth | (step?: number) => ExtDate | returns ExtDate object of `step`-month before (step is 1 if nothing given) | |
| prevYear | (step?: number) => ExtDate | returns ExtDate object of `step`-year before (step is 1 if nothing given) | |
| beginningOfDay | () => ExtDate | returns ExtDate object of the beginning of the day | |
| beginningOfWeek | () => ExtDate | returns ExtDate object of the beginning of the week | |
| beginningOfMonth | () => ExtDate | returns ExtDate object of the beginning of the month | |
| beginningOfYear | () => ExtDate | returns ExtDate object of the beginning of the year | |
| endOfDay | () => ExtDate | returns ExtDate object of the end of the day | |
| endOfWeek | () => ExtDate | returns ExtDate object of the end of the week | |
| endOfMonth | () => ExtDate | returns ExtDate object of the end of the month | |
| endOfYear | () => ExtDate | returns ExtDate object of the end of the year | |

#### Boolean Methods

| method name | args => return value | description | active issue (if exists) |
| :--- | :--- | :--- | :---: |
| isSameDay | (date: ExtDate) => boolean | returns whether given 2 days are same or not | |
| isSameWeek | (date: ExtDate) => boolean | returns whether given 2 days are in a same week or not | |
| isSameMonth | (date: ExtDate) => boolean | returns whether given 2 days are in a same month or not | |
| isSameYear | (date: ExtDate) => boolean | returns whether given 2 days are in a same year or not | |

#### Formatter

| method name | args => return value | description | active issue (if exists) |
| :--- | :--- | :--- | :---: |
| strftime | (formatString: string, lang?: string) => string | returns arbitary format of time, lang is used only when day of week (including in short) is embedded | |


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
