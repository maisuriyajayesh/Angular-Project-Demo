import { Component } from '@angular/core';

@Component({
  selector: 'app-switchmethod',
  templateUrl: './switchmethod.component.html',
  styleUrls: ['./switchmethod.component.scss']
})
export class SwitchmethodComponent {

  title = 'Switch method'

  color = 'blue';

  users = ['Jayesh', 'Mayur', 'Madhu', 'jay', 'rathod'];

   userdeatils = [
     {
       name: 'Jayesh',
       email: 'jayesh@test.com',
       phone: '9999 999 999',
       socialaccounts: ['facebook', 'insta' , 'gmail' ]
     },
     {
       name: 'Mayur',
       email: 'Mayur@test.com',
       phone: '9999 999 999',
       socialaccounts: ['insta', 'facebook' , 'gmail' ]
     },
     {
       name: 'Madhu',
       email: 'Madhu@test.com',
       phone: '9999 999 999',
       socialaccounts: ['facebook', 'insta' , 'gmail' ]
     },
     {
       name: 'jay',
       email: 'jay@test.com',
       phone: '9999 999 999',
       socialaccounts: ['gmail', 'insta' , 'facebook' ]
     },
     {
       name: 'rathod',
       email: 'rathod@test.com',
       phone: '9999 999 999',
       socialaccounts: ['facebook', 'gmail' , 'insta' ]
     }

   ]

}
