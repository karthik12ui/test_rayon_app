/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OilGasComponent } from './oil-gas.component';

describe('OilGasComponent', () => {
  let component: OilGasComponent;
  let fixture: ComponentFixture<OilGasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilGasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
