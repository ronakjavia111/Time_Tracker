import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDetails } from './log-details';

describe('LogDetails', () => {
  let component: LogDetails;
  let fixture: ComponentFixture<LogDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
