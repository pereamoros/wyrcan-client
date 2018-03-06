import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-archived-job',
  templateUrl: './archived-job.component.html',
  styleUrls: ['./archived-job.component.css']
})
export class ArchivedJobComponent implements OnInit {
  @Input() job:any;
  @Output() unarchive = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  handleUnarchiveClick(id){
    this.unarchive.emit(id);
  }

}
