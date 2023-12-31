import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PunchtimelistService } from '../services/punchtimelist.service';
@Component({
  selector: 'app-office-punch-data',
  templateUrl: './office-punch-data.component.html',
  styleUrls: ['./office-punch-data.component.scss']
})

export class OfficePunchDataComponent {
  checkObj: checkObj;
  checkArr: checkObj[] = [];
  DateArr: [] = [];
  checkList: any = [];
  FullDayHours: string = '';
  DateDeatils: string = '';
  SelectedDate: any = '';
  constructor(public datePipe: DatePipe, private _punchtimelist: PunchtimelistService) {
    this.checkObj = new checkObj();
  }

  onSave(modelData: any) {
    if (modelData.checkId === 0) {
      this.checkList = JSON.parse(localStorage.getItem('TimeData') || '[]');
      modelData.checkId = this.checkList.length + 1;
      this.calculateResult(modelData);
      this.checkArr.push(modelData);
    } else {
      const index = this.checkArr.findIndex((obj) => obj.checkId === modelData.checkId);
      if (index !== -1) {
        this.calculateResult(modelData);
        this.checkArr[index] = modelData;
      }
    }
    localStorage.setItem('TimeData', JSON.stringify(this.checkArr));
    this.checkObj = new checkObj();
    this.getAllcheckData();
  }

  calculateResult(modelData: checkObj) {
    const checkInTime = new Date(`2000-01-01T${modelData.checkin}`);
    const checkOutTime = new Date(`2000-01-01T${modelData.checkout}`);
    const diffMillis = checkOutTime.getTime() - checkInTime.getTime();

    const hours = Math.floor(diffMillis / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((diffMillis % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((diffMillis % 60000) / 1000).toString().padStart(2, '0');

    modelData.result = `${hours}:${minutes}:${seconds}`;
  }

  getTotalDuration(): string {
    let totalMillis = 0;
    for (const item of this.checkArr) {
      const checkInTime = new Date(`2000-01-01T${item.checkin}`);
      const checkOutTime = new Date(`2000-01-01T${item.checkout}`);
      const diffMillis = checkOutTime.getTime() - checkInTime.getTime();
      totalMillis += diffMillis;
    }

    const totalSeconds = Math.floor(totalMillis / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }

  getAllcheckData() {
    const isData = localStorage.getItem('TimeData');
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.checkArr = localData;
    }
  }

  onEdit(item: checkObj) {
    this.checkObj = Object.assign({}, item);
  }

  onDelete(item: checkObj) {
    const index = this.checkArr.findIndex((obj) => obj.checkId === item.checkId);
    if (index !== -1) {
      this.checkArr.splice(index, 1);
    }
    localStorage.setItem('TimeData', JSON.stringify(this.checkArr));
    this.getAllcheckData();
  }
  getTodayDate() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  }
  SaveDaily() {
    // Step 1: Get the total duration (FullDayHours)
    this.FullDayHours = this.getTotalDuration();

    // Step 2: Get today's date (SelectedDate)
    this.SelectedDate = this.getTodayDate();

    // Step 3: Retrieve the previously stored SelectedDate from localStorage
    const storedSelectedDate = localStorage.getItem('SelectedDate');

    // Step 4: Compare the current SelectedDate with the stored SelectedDate
    if (storedSelectedDate === this.SelectedDate) {
      // If they are the same, update the FullDayHours in localStorage
      localStorage.setItem('FullDayHours', this.FullDayHours);

    }

    // Step 5: Always store the current SelectedDate in localStorage
    localStorage.setItem('SelectedDate', this.SelectedDate);

    // Step 6: Call the addDailyPuchData method from the _punchtimelist service and subscribe to its response.
    // Assuming addDailyPuchData expects an object as its parameter containing FullDayHours and SelectedDate.
    const data = { FullDayHours: this.FullDayHours, SelectedDate: this.SelectedDate };
    this._punchtimelist.addDailyPuchData(data).subscribe(
      (response) => {
        //this.FullDayHours = ''; // Clear FullDayHours
        //this.checkArr = []; // Clear checkArr or any other data structure you want to clear
        //localStorage.removeItem('TimeData'); // Remove the saved data from localStorage
      },
      (error) => {
        // Handle the error here if needed.
      }
    );
  }

  ngOnInit(): void {
    this.FullDayHours = localStorage.getItem('FullDayHours') || '';
    this.SelectedDate = localStorage.getItem('SelectedDate') || '';
    this.getAllcheckData();
  }
}
export class checkObj {
  checkId: number;
  checkin: string;
  checkout: string;
  result: string;

  constructor() {
    this.checkId = 0;
    this.checkin = '';
    this.checkout = '';
    this.result = '';

  }
}
