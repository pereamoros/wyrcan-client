import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsIdComponent } from './jobs-id.component';

describe('JobsIdComponent', () => {
  let component: JobsIdComponent;
  let fixture: ComponentFixture<JobsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
