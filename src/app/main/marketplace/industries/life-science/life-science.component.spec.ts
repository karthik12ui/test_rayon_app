/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifeScienceComponent } from './life-science.component';

describe('LifeScienceComponent', () => {
  let component: LifeScienceComponent;
  let fixture: ComponentFixture<LifeScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
