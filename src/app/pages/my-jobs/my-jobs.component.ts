import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {

  user: any;
  jobs: any;
  
  constructor(
    private jobsService: JobsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.jobsService.getList()
    .then((jobs) => {
      this.jobs = jobs;
    })
  }


}
