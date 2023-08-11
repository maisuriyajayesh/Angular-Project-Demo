import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-proflie-data-list',
  templateUrl: './all-proflie-data-list.component.html',
  styleUrls: ['./all-proflie-data-list.component.scss']
})
export class AllProflieDataListComponent {
  studentData:any;
  constructor(private router: Router){
  }

  BackToList() {
    this.router.navigate(['profile-entry-form']);
  }
}
