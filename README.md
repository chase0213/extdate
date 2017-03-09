[![Build Status](https://travis-ci.org/chase0213/extdate.svg?branch=master)](https://travis-ci.org/chase0213/extdate)

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

Available instance methods are as follows (directly quoted from type definition files):

```
    unixTime(): number;
    miliSecond(): number;
    second(): number;
    minute(): number;
    hour(): number;
    day(): number;
    month(): number;
    year(): number;
    dayOfWeek(format?: string): string;
    dayOfWeekInShort(format?: string): string;
    toArray(): number[];
    nextDay(step?: number): ExtDate;
    nextWeek(step?: number): ExtDate;
    nextMonth(step?: number): ExtDate;
    nextYear(step?: number): ExtDate;
    prevDay(step?: number): ExtDate;
    prevWeek(step?: number): ExtDate;
    prevMonth(step?: number): ExtDate;
    prevYear(step?: number): ExtDate;
    beginningOfDay(): ExtDate;
    beginningOfWeek(): ExtDate;
    beginningOfMonth(): ExtDate;
    beginningOfYear(): ExtDate;
    endOfDay(): ExtDate;
    endOfWeek(): ExtDate;
    endOfMonth(): ExtDate;
    endOfYear(): ExtDate;
    strftime(formatString: string, lang?: string): string;
```

