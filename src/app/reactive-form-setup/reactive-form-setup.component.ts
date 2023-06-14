import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-reactive-form-setup',
  templateUrl: './reactive-form-setup.component.html',
  styleUrls: ['./reactive-form-setup.component.scss']
})
export class ReactiveFormSetupComponent implements OnInit {
  form: any;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  contactRegex: string = "[789][0-9]{9}";
  skills: any;

  constructor( ) {
// FormBuilder From //
    // this.form.fb.group({
    //   FullName : ['', Validators.required, Validators.minLength(5)],
    //   Email : ['', Validators.required, Validators.pattern(this.emailRegex)],
    //   contactDetails: fb.group({
    //     Address : ['', Validators.required],
    //     ShipingAddress : ['', Validators.required],
    //     contactNo : ['', Validators.required, Validators.pattern(this.contactRegex)],
    //   }),
    //   skills: fb.array([])
    // })
// FormBuilder From //

     this.form = new FormGroup({
       FullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
       Email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    
       // nested From start//
       contactDetails: new FormGroup({  
         Address: new FormControl('', [Validators.required]),
         ShipingAddress: new FormControl('', [Validators.required]),
         contactNo: new FormControl('', [Validators.required, Validators.pattern(this.contactRegex)]),
       }),
       // nested From end //
       // Array From //
       skills : new FormArray([

       ])
       // Array From end //
     });
  }

  get FullName(){
    return this.form.get('FullName');
  }
  get Email(){
    return this.form.get('Email');
  }
  get Address(){
    return this.form.get('contactDetails.Address');
  }
  get ShipingAddress(){
    return this.form.get('contactDetails.ShipingAddress'); // if nested From like this 
  }
  get contactNo(){
    return this.form.get('contactDetails.contactNo'); // if nested From like this
  }

  get Skills(){
    return this.form.get('skills') as FormArray;  
  }
 
  onSubmit(){
    this.form.value
  }

  addSkills(skills:HTMLInputElement){ 
     this.Skills.push(
      new FormControl(skills.value)
    )
    skills.value='';
  }
  removeSkills(index:any){
    this.Skills.removeAt(index)
  }

  ngOnInit(): void {

  }

}
