import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  show: boolean = false;
  buttonName: any = 'Show';
  Name: any;
  myDropdown: any;
  studentArr: Array<any> = [];
  student: any = {
    studentId: 0,
    Name: '',
  }
  userForm: any;
  onAdd(userForm: any) {
    let editData = this.studentArr.findIndex((obj) => this.student.studentId == obj.studentId)
    if (editData > -1) {
      //console.log("if part", editData);
      this.studentArr[editData].Name = this.student.Name;
      this.student.Name = "";
    } else {
      //console.log("else part", editData);
      this.student.studentId = this.studentArr.length + 1;
      this.studentArr.push(this.student);
      localStorage.setItem("studentlist", JSON.stringify(this.studentArr));
      this.student = {
        studentId: 0,
        Name: ''
      }
    }
  }
  onEdit(index: any) {
    let filterData = this.studentArr[index];
    this.student.Name = filterData.Name;
    this.student.studentId = filterData.studentId
    //console.log(this.student);
  }
  onRemove(i: number) {
    let index = this.studentArr.findIndex((obj) => this.student.studentId == obj.studentId);
    this.studentArr.splice(index, 1);
    localStorage.setItem("studentlist", JSON.stringify(this.studentArr));

  }
  ngOnInit(): void {
    const localData = localStorage.getItem('studentlist');
    if (localData != null) {
      this.studentArr = JSON.parse(localData);
    }
  }

}
