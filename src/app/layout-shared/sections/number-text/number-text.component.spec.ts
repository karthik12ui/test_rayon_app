/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumberTextComponent } from './number-text.component';

describe('NumberTextComponent', () => {
  let component: NumberTextComponent;
  let fixture: ComponentFixture<NumberTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
