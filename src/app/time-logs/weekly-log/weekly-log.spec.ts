import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyLog } from './weekly-log';

describe('WeeklyLog', () => {
  let component: WeeklyLog;
  let fixture: ComponentFixture<WeeklyLog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyLog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyLog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
