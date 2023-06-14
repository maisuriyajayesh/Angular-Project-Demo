import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-modal-list-table',
  templateUrl: './add-modal-list-table.component.html',
  styleUrls: ['./add-modal-list-table.component.scss']
})
export class AddModalListTableComponent implements OnInit {

  studentArr: any[] = [];
  student: any = {
    studentId: 0,
    FullName: '',
    Mobile: '',
    Email: '',
    Address: '',
  }
  isSelectAll : boolean = false;

  constructor() { }
  onCheckAll(){
    for (let i = 0; i < this.studentArr.length; i++) {
     this.studentArr[i].isChecked = this.isSelectAll;  
      
    }
  }
  onaddDataList() {
    const notNull = document.getElementById('DataListModal');
    if (notNull != null) {
      notNull.style.display = "block";
    }
    this.student = {
      studentId: 0,
      FullName: '',
      Mobile: '',
      Email: '',
      Address: '',
    }
  }
  onCloseDataList() {
    const notNull = document.getElementById('DataListModal');
    if (notNull != null) {
      notNull.style.display = "none";
    }
   
  }

  saveDataTable(userForm: any) {
    this.student.studentId = this.studentArr.length + 1;
    this.studentArr.push(this.student);
    this.onCloseDataList();
    localStorage.setItem("studentlist", JSON.stringify(this.studentArr));
    this.student = {
      studentId: 0,
      FullName: '',
      Mobile: '',
      Email: '',
      Address: '',
    }
  }
  onEdit(data: any) {
    this.onaddDataList();
    //this.student = data
    this.student = Object.assign({}, data);


  }
  onRemove(id: number) {
    for (let i = 0; i < this.studentArr.length; i++) {
      if (this.studentArr[i].studentId == id) {
        this.studentArr.splice(i, 1);
      }
    }
    localStorage.setItem("studentlist", JSON.stringify(this.studentArr));
  }
  UpdateDataTable(data: any) {
    const record = this.studentArr.find(m => m.studentId == this.student.studentId)
    record.FullName = this.student.FullName;
    record.Mobile = this.student.Mobile;
    record.Email = this.student.Email;
    record.Address = this.student.Address;
    localStorage.setItem("studentlist", JSON.stringify(this.studentArr));
    this.onCloseDataList();
  }


  ngOnInit(): void {
    const localData = localStorage.getItem('studentlist');
    if (localData != null) {
      this.studentArr = JSON.parse(localData);

    }
  }

}
