import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePickerService } from '../custom-date-picker.service';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input('showDay') showDay = true;
  @Input('showMonth') showMonth = true;
  @Input('showYear') showYear = true;
  @Input('theme') themeColor = 'default';

  @Output('date') finalDate = new EventEmitter<Date>();
  @Output('day') finalDay = new EventEmitter<number>();
  @Output('month') finalMonth = new EventEmitter<number>();
  @Output('month_name') finalMonthName = new EventEmitter<string>();
  @Output('year') finalYear = new EventEmitter<number>();

  showDateBox = true;
  showMonthBox = false;
  showYearBox = false;

  selectedDay: number;
  selectedMonth: number;
  selectedYear: number;
  currentYear: number;

  checkDay: number;
  checkMonth: number;
  checkYear: number

  years: Array<number>;
  monthDayMap: Array<{ numberOfDays: number, month: string, days: Array<number> }>;

  constructor(private datePickerService: DatePickerService) { }

  ngOnInit(): void {
    let date = new Date();
    this.selectedDay = this.checkDay = date.getDate();
    this.selectedMonth = this.checkMonth = date.getMonth();
    this.selectedYear = this.currentYear = this.checkYear = date.getFullYear();
    this.years = Array(12).fill(this.selectedYear).map((val, ind) => { val += ind; return val });
    this.monthDayMap = this.datePickerService.getMap();
    this.themeColor = `theme-${this.themeColor}`;

    if (this.showYear) {
      this.toggleDayMonthYear('year');
    }
    if (this.showMonth) {
      this.toggleDayMonthYear('month');
    }
    if (this.showDay) {
      this.toggleDayMonthYear('day');
    }

  }

  monthYearPrev(): void {
    if (this.showDateBox) {
      this.selectedMonth--;
      if (this.selectedMonth < 0) {
        this.selectedYear--;
        this.selectedMonth = 11;
      }
      this.monthDayMap[this.selectedMonth].days = this.datePickerService.arrangeDates(this.selectedMonth, this.monthDayMap[this.selectedMonth].numberOfDays, this.selectedYear);
    }
    else if (this.showMonthBox) {
      this.selectedYear--;
    }
    else if (this.showYearBox) {
      this.currentYear -= 12;
      this.years = Array(12).fill(this.currentYear).map((val, ind) => { val += ind; return val });
    }
  }

  monthYearNext(): void {
    if (this.showDateBox) {
      this.selectedMonth++;
      if (this.selectedMonth > 11) {
        this.selectedYear++;
        this.selectedMonth = 0;
      }
      this.monthDayMap[this.selectedMonth].days = this.datePickerService.arrangeDates(this.selectedMonth, this.monthDayMap[this.selectedMonth].numberOfDays, this.selectedYear);
    }
    else if (this.showMonthBox) {
      this.selectedYear++;
    }
    else if (this.showYearBox) {
      this.currentYear += 12;
      this.years = Array(12).fill(this.currentYear).map((val, ind) => { val += ind; return val });
    }
  }

  selectDay(day: number): void {
    this.selectedDay = this.checkDay = day;
    this.checkMonth = this.selectedMonth;
    this.checkYear = this.selectedYear;
    this.emitOutput();
  }

  selectMonth(month: string): void {
    this.selectedMonth = this.checkMonth = this.datePickerService.nameToMonth(month);
    this.checkYear = this.selectedYear;
    if (!this.showDay) {
      this.emitOutput()
    }
    else {
      this.toggleDayMonthYear('day');
    }
  }

  selectYear(year: number): void {
    this.selectedYear = this.checkYear = year;
    if (!this.showMonth && !this.showDay) {
      this.emitOutput()
    }
    else if (!this.showMonth) {
      this.toggleDayMonthYear('day')
    }
    else {
      this.toggleDayMonthYear('month');
    }
  }

  toggleDayMonthYear(param: string): void {
    if (param === 'day') {
      this.showDateBox = true;
      this.showMonthBox = false;
      this.showYearBox = false;
    }
    else if (param === 'month') {
      this.showDateBox = false;
      this.showMonthBox = true;
      this.showYearBox = false;
      if (!this.showMonth && this.showYear) {
        this.toggleDayMonthYear('year');
      }
      else if (!this.showMonth && !this.showYear) {
        this.toggleDayMonthYear('day');
      }
    }
    else if (param === 'year' && this.showYear) {
      this.showDateBox = false;
      this.showMonthBox = false;
      this.showYearBox = true;
    }
    this.datePickerService.arrangeDates(this.selectedMonth, this.monthDayMap[this.selectedMonth].numberOfDays, this.selectedYear);
  }

  highlightCurrentDate(day: number): boolean {
    let date = new Date();
    return this.selectedDay === day && this.selectedMonth === this.checkMonth && this.selectedYear === this.checkYear;
  }

  highlightCurrentMonth(month: string): boolean {
    let date = new Date();
    return this.selectedMonth === this.datePickerService.nameToMonth(month) && this.selectedYear === this.checkYear;
  }

  highlightCurrentYear(year: number): boolean {
    return year === this.selectedYear;
  }

  emitOutput(): void {
    let date = new Date(this.selectedYear, this.selectedMonth, this.selectedDay);
    let emitMonthName = this.datePickerService.monthToName(this.selectedMonth);
    let emitDay = this.selectedDay;
    let emitMonth = this.selectedMonth;
    let emitYear = this.selectedYear;
    if (!this.showDay) {
      emitDay = undefined;
      date = undefined;
    }
    if (!this.showMonth) {
      emitMonth = undefined;
      emitMonthName = undefined;
      date = undefined;
    }
    if (!this.showYear) {
      emitYear = undefined
      date = undefined;
    }
    this.finalDate.emit(date);
    this.finalDay.emit(emitDay);
    this.finalMonth.emit(emitMonth);
    this.finalMonthName.emit(emitMonthName);
    this.finalYear.emit(emitYear);
  }
}
