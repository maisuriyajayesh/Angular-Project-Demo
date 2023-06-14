import { Component } from '@angular/core';

@Component({
  selector: 'app-loopmethod',
  templateUrl: './loopmethod.component.html',
  styleUrls: ['./loopmethod.component.scss']
})
export class LoopmethodComponent {
  title = 'ng Loop'

  color = 'blue';

  //users = ['Jayesh', 'Mayur', 'Madhu', 'jay', 'rathod'];

   userdeatils = [
     {
       name: 'Jayesh',
       email: 'jayesh@test.com',
       phone: '9999 999 999',
       socialaccounts: ['facebook' ]
     },
     {
       name: 'Mayur',
       email: 'Mayur@test.com',
       phone: '9999 999 999',
       socialaccounts: ['insta' ]
     },
     {
       name: 'Madhu',
       email: 'Madhu@test.com',
       phone: '9999 999 999',
       socialaccounts: ['gmail' ]
     },
     {
       name: 'jay',
       email: 'jay@test.com',
       phone: '9999 999 999',
       socialaccounts: ['facebook' ]
     },
     {
       name: 'rathod',
       email: 'rathod@test.com',
       phone: '9999 999 999',
       socialaccounts: ['facebook']
     }

   ]

}




