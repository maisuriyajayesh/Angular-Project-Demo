import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss'],
})
export class ReactiveformsComponent implements OnInit {
  constructor(public router: Router, private route: ActivatedRoute) {}
  ContactForm: any;
  ContactDataArr: any[] = [];
  ContactData: any = {
    ContactDataId: 0,
    Name: '',
    Email: '',
    Mobile: '',
  };

  onSubmit(ContactForm: any): void {
    const existingData = localStorage.getItem('studentlist');
    if (existingData) {
      this.ContactDataArr = JSON.parse(existingData) as Array<any>;
    }

    const newData = {
      ContactDataId: this.ContactData.ContactDataId || Date.now(),
      Name: this.ContactData.Name,
      Mobile: this.ContactData.Mobile,
      Email: this.ContactData.Email,
    };


    const existingIndex = this.ContactDataArr.findIndex(
      (data) => data.ContactDataId === this.ContactData.ContactDataId
    );

    if (existingIndex !== -1) {
      this.ContactDataArr[existingIndex] = newData;
      this.router.navigate(['form-deatils-list'], {
        queryParams: { id: this.ContactData.ContactDataId },
      });

    } else {
      this.ContactDataArr.push(newData);
      this.router.navigate(['form-deatils-list']);
    }

    localStorage.setItem('studentlist', JSON.stringify(this.ContactDataArr));
    this.ContactData = {
      ContactDataId: 0,
      Name: '',
      Mobile: '',
      Email: '',
    };
  }

  BackToList() {
    this.router.navigate(['form-deatils-list']);
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['id']) {
        const existingData = localStorage.getItem('studentlist');
        if (existingData) {
          this.ContactDataArr = JSON.parse(existingData);
          const selectedData = this.ContactDataArr.find(
            (data) => data.ContactDataId === Number(params['id'])
          );
          if (selectedData && selectedData.ContactDataId !== 0) {
            this.ContactData = selectedData;
          }
        }
      }
    });
  }


}
