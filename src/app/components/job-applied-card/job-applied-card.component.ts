import { Component, OnInit, Input } from '@angular/core';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job-applied-card',
  templateUrl: './job-applied-card.component.html',
  styleUrls: ['./job-applied-card.component.css']
})
export class JobAppliedCardComponent implements OnInit {
  @Input() job:any;
  constructor(private jobsService: JobsService) { }

  ngOnInit() {
  }

}
