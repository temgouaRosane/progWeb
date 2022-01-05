import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsInputComponent } from './sms-input.component';

describe('SmsInputComponent', () => {
  let component: SmsInputComponent;
  let fixture: ComponentFixture<SmsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
