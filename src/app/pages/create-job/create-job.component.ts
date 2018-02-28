import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  error= null;
  feedbackEnabled = false;
  processing = false;
  position: String;
  description: String;

  constructor(
    private jobsService: JobsService,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.jobsService.create({
          position: this.position,
          description: this.description
        })
        .then((result) => {
          this.router.navigate(['/my-jobs']);
        })
        .catch((err) => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
