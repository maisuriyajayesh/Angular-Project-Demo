import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
 @Component({
  selector: 'app-maketodolist',
  templateUrl: './maketodolist.component.html',
  styleUrls: ['./maketodolist.component.scss']
})

export class MaketodolistComponent implements OnInit {
  public User: any[] = [];
  public resetForm: any = {}; 
  public isSubmit = false; 
  public index!: number;
  public form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),

  })
  
  getData() {
    this.isSubmit = true;
    if (this.form.valid) {
      this.User.push(this.form.value);
      localStorage.setItem('localstorageData', JSON.stringify(this.User));
      this.form.reset();
      this.isSubmit = false;
    }
  }
  removeTask(index: number) {
    this.User.splice(index, 1);
    localStorage.setItem('localstorageData', JSON.stringify(this.User));
  }
  editData(index: number) {
      this.form.patchValue(this.User[index]);

  }
  ngOnInit() {
    const storedData = localStorage.getItem('localstorageData');
    if (storedData) {
      this.User = JSON.parse(storedData);
    }
  }
}

