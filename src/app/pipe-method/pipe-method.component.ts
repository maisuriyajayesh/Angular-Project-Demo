import { Component } from '@angular/core';

import { PipeFilterPipe } from "../pipe-filter.pipe";

@Component({
  selector: 'app-pipe-method',
  templateUrl: './pipe-method.component.html',
  styleUrls: ['./pipe-method.component.scss'],
  providers: [PipeFilterPipe]
})
export class PipeMethodComponent {

  Title: string = 'Anglur pipe'
  Count: number = 2586984
  dcValue: number = 3.56848
  price: number = 1215.99
  today: Date = new Date();
  postObj: object = {
    id: 1,
    postTitle: "post 1"
  }

  postArray: Array<string> =[
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5"
  ]

  userdetails = {
    name: "User 1",
    city: "Gujarat",
    countryCode: "India"
  }

  title = 'ng Loop'
  color = 'blue';
  pipes = 'any';

  searchTerm!: string;

  //users = ['Jayesh', 'Mayur', 'Madhu', 'jay', 'rathod'];

  userdeatils = [
    {
      name: 'jayesh',
      email: 'jayesh@test.com',
      phone: '123 999 999',
      socialaccounts: ['facebook']
    },
    {
      name: 'mayur',
      email: 'Mayur@test.com',
      phone: '9857 999 999',
      socialaccounts: ['insta']
    },
    {
      name: 'Madhu',
      email: 'Madhu@test.com',
      phone: '2253 999 999',
      socialaccounts: ['gmail']
    },
    {
      name: 'jay',
      email: 'jay@test.com',
      phone: '5962 999 999',
      socialaccounts: ['facebook']
    },
    {
      name: 'rathod',
      email: 'rathod@test.com',
      phone: '7868 999 999',
      socialaccounts: ['facebook']
    }

  ]



}
