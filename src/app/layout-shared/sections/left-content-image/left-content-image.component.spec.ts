/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeftContentImageComponent } from './left-content-image.component';

describe('LeftContentImageComponent', () => {
  let component: LeftContentImageComponent;
  let fixture: ComponentFixture<LeftContentImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftContentImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftContentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
