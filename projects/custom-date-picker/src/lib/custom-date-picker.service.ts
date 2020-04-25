import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatePickerService {
  
  monthDayMap = [
    {
      numberOfDays: 31,
      month: 'January',
      days: this.arrangeDates(0, 31)//() => { return Array(31).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 28,
      month: 'February',
      days: this.arrangeDates(1, 28)//() => { return Array(28).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 31,
      month: 'March',
      days: this.arrangeDates(2, 31)//() => { return Array(31).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 30,
      month: 'April',
      days: this.arrangeDates(3, 30)//() => { return Array(30).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 31,
      month: 'May',
      days: this.arrangeDates(4, 31)//() => { return Array(31).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 30,
      month: 'June',
      days: this.arrangeDates(5, 30)//() => { return Array(30).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 31,
      month: 'July',
      days: this.arrangeDates(6, 31)//() => { return Array(31).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 31,
      month: 'August',
      days: this.arrangeDates(7, 31)//() => { return Array(31).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 30,
      month: 'September',
      days: this.arrangeDates(8, 30)//() => { return Array(30).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 31,
      month: 'October',
      days: this.arrangeDates(9, 31)//() => { return Array(31).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 30,
      month: 'November',
      days: this.arrangeDates(10, 30)//() => { return Array(30).fill(0).map((val, ind) => ind + 1); },
    },
    {
      numberOfDays: 31,
      month: 'December',
      days: this.arrangeDates(11, 31)//() => { return Array(31).fill(0).map((val, ind) => ind + 1); },
    }
  ];
  
  constructor() { }

  arrangeDates(month: number, numberOfDays: number, year?: number): Array<number> {
    let offsetDay = new Date(year || new Date().getFullYear(), month, 1).getDay();
    let len = offsetDay + numberOfDays;
    return Array(len).fill(0).map((val, ind) => {
      if (ind < offsetDay)
        val = 0;
      else
        val = ind - offsetDay + 1;
      return val;
    });
  }

  monthToName(month: number): string {
    return this.monthDayMap[month].month;
  }

  nameToMonth(month: string): number {
    return this.monthDayMap.findIndex((element) => { return element.month === month; });
  }

  getMap() {
    return [...this.monthDayMap];
  }
}
