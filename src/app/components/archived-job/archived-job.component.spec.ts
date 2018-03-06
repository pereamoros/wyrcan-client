import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedJobComponent } from './archived-job.component';

describe('ArchivedJobComponent', () => {
  let component: ArchivedJobComponent;
  let fixture: ComponentFixture<ArchivedJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
