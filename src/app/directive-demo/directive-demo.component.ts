import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss']
})
export class DirectiveDemoComponent {
  
  Name:any;
  Email:any;
  Address:any;
  userArray: Array<any> = []; 

  constructor(){}
  onSave(){
    this.userArray.push({
      "Name" :this.Name,
      "Email" :this.Email,
      "Address" :this.Address
    });
    console.log(this.userArray);
  }
  onDelete(index:any){
   this.userArray.splice(index, 1); 
  }
}
 

