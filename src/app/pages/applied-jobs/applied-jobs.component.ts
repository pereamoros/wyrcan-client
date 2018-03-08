import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  user: any;
  jobs: any;
  constructor(
    private authService: AuthService,
    private jobsService: JobsService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.jobsService.getApplied()
    .then((user) => {
      this.jobs = user.appliedJobs;
    })
  }

}
