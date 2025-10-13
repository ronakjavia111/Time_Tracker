import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTime } from './log-time';

describe('LogTime', () => {
  let component: LogTime;
  let fixture: ComponentFixture<LogTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
