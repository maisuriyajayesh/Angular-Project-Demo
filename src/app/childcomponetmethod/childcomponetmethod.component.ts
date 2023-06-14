import { Component , Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponetmethod',
  templateUrl: './childcomponetmethod.component.html',
  styleUrls: ['./childcomponetmethod.component.scss']
})
export class ChildcomponetmethodComponent {
  title = 'Send data child to parent component'
@Output() updateDataEvent= new EventEmitter<string>();
  
}
