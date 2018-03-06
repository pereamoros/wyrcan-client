import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JobsService } from '../../services/jobs.service';

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
    private jobsService: JobsService) { }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.jobsService.getArchived()
    .then((jobs) => {
      this.jobs = jobs;
    })
  }

}
