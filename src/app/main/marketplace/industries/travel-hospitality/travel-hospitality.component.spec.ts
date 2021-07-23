/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelHospitalityComponent } from './travel-hospitality.component';

describe('TravelHospitalityComponent', () => {
  let component: TravelHospitalityComponent;
  let fixture: ComponentFixture<TravelHospitalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelHospitalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelHospitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
