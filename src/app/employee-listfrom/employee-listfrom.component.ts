import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-listfrom',
  templateUrl: './employee-listfrom.component.html',
  styleUrls: ['./employee-listfrom.component.scss']
})
export class EmployeeListfromComponent implements OnInit {

  employeeObj: employeeObj;
  sortby: string;
  serachText: string;
  employeeArr: employeeObj[] = [];
  employeeList: any = [];
  Searchdatalist: '' = "";
  noData: boolean;
  hasData: boolean;

  constructor() {
    this.employeeObj = new employeeObj();
    this.sortby = '';
    this.serachText = '';
    this.hasData = this.employeeArr.length > 0;
    this.noData = !this.hasData;
  }

  onSave(modelData: any) {
    if (modelData.EmployeeId === 0) {
      this.employeeList = JSON.parse(localStorage.getItem("EmpData") || '[]');
      modelData.EmployeeId = this.employeeList.length + 1;
      this.employeeArr.push(modelData);
    }
    else {
      const index = this.employeeArr.findIndex(obj => obj.EmployeeId === modelData.EmployeeId);
      if (index !== -1) {
        this.employeeArr[index] = modelData;
      }
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeArr));
    this.employeeObj = new employeeObj();
    this.getAllEmployee();
  }

  getAllEmployee() {

    const isData = localStorage.getItem("EmpData");
    if (isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArr = localData;
    }
  }

  onEdit(item: employeeObj) {
    //this.employeeObj = item;
    this.employeeObj = Object.assign({}, item);
  }

  onDelete(item: employeeObj) {
    const index = this.employeeArr.findIndex(obj => obj.EmployeeId === item.EmployeeId);
    if (index !== -1) {
      this.employeeArr.splice(index, 1);
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeArr));
    this.getAllEmployee();
  }
  ngOnInit(): void {
    this.getAllEmployee();
  }

}

export class employeeObj {
  EmployeeId: number;
  FirstName: string;
  LastName: string;
  Technology: string;
  Designation: string;
  Skill: string;
  Compnay: string;
  CompnayDeatils: string;


  constructor() {
    this.EmployeeId = 0;
    this.FirstName = "";
    this.LastName = "";
    this.Technology = "";
    this.Designation = "";
    this.Skill = "";
    this.Compnay = "";
    this.CompnayDeatils = "";
  }

}