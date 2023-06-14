import { Component } from '@angular/core';
import { NgForm} from "@angular/forms"
@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.scss']
})
export class FormdemoComponent {
  title = 'Forms Data Get'
  userData:any={};

  getdata(data:NgForm){

    console.warn(data)

      this.userData=data
  }
}
