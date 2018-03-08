import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.css']
})
export class ApplicantCardComponent implements OnInit {

  @Input() applicant:any
  @Input() job:any  
  constructor() { }

  ngOnInit() {
  }

}
