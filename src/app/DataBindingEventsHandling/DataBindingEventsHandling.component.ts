import { Component } from '@angular/core';

@Component({
  selector: 'app-DataBindingEventsHandling',
  templateUrl: './DataBindingEventsHandling.component.html',
  styleUrls: ['./DataBindingEventsHandling.component.scss'],
})
export class DataBindingEventsHandlingComponent {
  constructor() {}
  postTitle: string = '';
  PostDetails: string = '';
  imageURL: string = '';
  postURL: string = '';
  addBackground: boolean = false;
}
