import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTime } from './daily-time';

describe('DailyTime', () => {
  let component: DailyTime;
  let fixture: ComponentFixture<DailyTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
