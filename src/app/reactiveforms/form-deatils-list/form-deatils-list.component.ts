import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-form-deatils-list',
  templateUrl: './form-deatils-list.component.html',
  styleUrls: ['./form-deatils-list.component.scss']
})
export class FormDeatilsListComponent implements OnInit {

  constructor(
  
    private router: Router
  ) { }

  selectedData: any;
  contactFormArr: any[] = [];
  ContactData: any = {
    ContactDataId: 0,
    Name: '',
    Email: '',
    Mobile: ''
  };

  editFormData(item: any) {
    this.router.navigate(['reactiveforms'], { queryParams: { id: item.ContactDataId } });
  }

  AddNewEntry() {
    this.router.navigate(['/reactiveforms']);
  }

  removeFormData(item: any) {
    let index = this.contactFormArr.findIndex(obj => obj.ContactDataId === item.ContactDataId);
   if (index !== -1) {
    this.contactFormArr.splice(index, 1);
  }
    localStorage.setItem("studentlist", JSON.stringify(this.contactFormArr));
    
  }
  

  ngOnInit(): void {
    const existingData = localStorage.getItem("studentlist");
    if (existingData) {
      this.contactFormArr = JSON.parse(existingData);
    }
  }
}
