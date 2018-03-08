import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.css']
})
export class CandidatePageComponent implements OnInit {
  user:any
  userId: any
  userRole: any;
  userProfile: any;
  jobId: any
  constructor(
    private authService: AuthService,
    private jobsService: JobsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userRole = this.authService.getUser();
    this.route.params
    .subscribe((params) => {
      this.userId = String(params['userId'])
    })
    this.authService.getUserId(this.userId)
    .then((user) => {
      this.userProfile = user;
    })
    this.route.params
    .subscribe((params) => {
      this.jobId = String(params['id'])
    })
  }

  acceptCandidate(jobId, userId){
    this.jobsService.acceptCandidate(jobId, userId)
    .then(()=>{
      this.router.navigate([`/jobs/${jobId}`]);
    })
  }
  rejectCandidate(jobId, userId){
    this.jobsService.rejectCandidate(jobId, userId)
    .then(()=>{
      this.router.navigate([`/jobs/${jobId}`]);
    })
  }

}
