import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {
  
  user: any;
  jobs: any;
  constructor(
    private authService: AuthService,
    private jobsService: JobsService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.jobsService.getArchived()
    .then((jobs) => {
      this.jobs = jobs;
    })
  }

  handleUnarchive(event){
    this.jobsService.unarchive(event)
    .then((result) => {
      this.router.navigate(['/my-jobs']);
    })
  }

  handleDelete(event){
    this.jobsService.deleteJob(event)
    .then((result) => {
      this.jobsService.getArchived()
      .then((jobs) => {
        this.jobs = jobs;
      })
    })
  }

}
