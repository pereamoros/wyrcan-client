import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  user: any;
  jobs: any;
  
  constructor(private authService: AuthService,
  private jobsService: JobsService) { }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.jobsService.getList()
    .then((jobs) => {
      this.jobs = jobs;
    })
  }

}
