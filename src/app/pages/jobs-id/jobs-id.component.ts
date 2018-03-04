import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JobsService } from '../../services/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs-id',
  templateUrl: './jobs-id.component.html',
  styleUrls: ['./jobs-id.component.css']
})
export class JobsIdComponent implements OnInit {
  user: any
  job: any;
  jobId: any;
  constructor(
    private authService: AuthService,
    private jobsService: JobsService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    
    this.route.params
    .subscribe((params) => {
      this.jobId = String(params['id'])
    })
    this.jobsService.getJob(this.jobId)
    .then((job) => {
      this.job = job;
    })
  }

  apply(id){
    this.jobsService.apply(id)
    .then((result) => {
      this.router.navigate(['/jobs']);
    })
  }

}
