import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {

  jobs: any;
  
  constructor(private jobsService: JobsService) {
    this.jobsService.getList()
    .then((jobs) => {
      this.jobs = jobs;
    })
  }

  ngOnInit() {
    
  }


}
