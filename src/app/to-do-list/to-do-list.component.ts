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
  onAdd(userForm: any) {
    this.student.studentId = this.studentArr.length + 1;
    this.studentArr.push(this.student);
    localStorage.setItem("studentlist", JSON.stringify(this.studentArr));
    this.student = {
      studentId: 0,
      Name: ''
    }
  }
  onEdit(user:any){

  }
  ngOnInit(): void {
    const localData = localStorage.getItem('studentlist');
    if (localData != null) {
      this.studentArr = JSON.parse(localData);
    }
  }

}
