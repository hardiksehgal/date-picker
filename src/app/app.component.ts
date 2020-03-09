import { Component, Output, EventEmitter } from '@angular/core';
import { ModelDate } from './shared/date.model';

@Component({
  selector: 'date-picker',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedMonth: any;
  selectedYear: any;
  endYear: any;
  startYear: any;
  month = [["January", "February", "March"], ["April", "May", "June"], ["July", "August", "September"], ["October", "November", "December"]]
  years: any[][];
  showYears: boolean = true;
  showMonths: boolean = false;
  selectedDate = new ModelDate();
  @Output() date = new EventEmitter<ModelDate>();

  constructor() { }
  ngOnInit() {
    this.endYear = new Date().getUTCFullYear();
    this.calendarYear(this.endYear);
  }

  calendarYear(year) {
    this.years=[];
    var temp = parseInt(year)-11;
    this.startYear = parseInt(year)-11;
    for(var i = 0; i < 4; i++) {
      this.years[i]=[];
      for(var j = 0; j < 3; j++) {
        this.years[i].push(temp);
        temp++
      }
    }
  }

  changeYears(val) {
    var year;
    if(val == 'left') {
      year = parseInt(this.endYear)-12;
      this.endYear = year;
      this.calendarYear(year);
    }
    if(val == 'right') {
      year = parseInt(this.endYear)+12;
      this.endYear = year;
      this.calendarYear(year);
    }
    if(val == 'leftMonth') {
      this.selectedDate.year = parseInt(this.selectedDate.year) - 1;
    }
    if(val == 'rightMonth') {
      this.selectedDate.year = parseInt(this.selectedDate.year) + 1;
    }
  }

  pickYear(year) {
    // this.selectedYear = year;
    this.selectedDate.year = year;
    this.toggle();
  }
  pickMonth(month) {
    // this.selectedMonth = month;
    this.selectedDate.month = month;
    this.sendMessage();
  }

  sendMessage() {
    this.date.emit(this.selectedDate)
  }
  
  toggle() {
    this.showMonths = !this.showMonths;
    this.showYears = !this.showYears;
  }
}
