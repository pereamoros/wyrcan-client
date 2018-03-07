import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppliedCardComponent } from './job-applied-card.component';

describe('JobAppliedCardComponent', () => {
  let component: JobAppliedCardComponent;
  let fixture: ComponentFixture<JobAppliedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAppliedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAppliedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
