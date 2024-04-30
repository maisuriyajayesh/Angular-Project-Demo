import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-all-proflie-data-list',
  templateUrl: './all-proflie-data-list.component.html',
  styleUrls: ['./all-proflie-data-list.component.scss']
})
export class AllProflieDataListComponent {
  studentData:any;   constructor(private route: ActivatedRoute, private router: Router) {}

    BackToList() {
      this.router.navigate(['profile-entry-form']);
    }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['profileData']) {
        this.studentData = JSON.parse(params['profileData']);
      }
    });
  }
}
