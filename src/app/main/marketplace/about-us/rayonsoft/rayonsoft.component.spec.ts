/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RayonsoftComponent } from './rayonsoft.component';

describe('RayonsoftComponent', () => {
  let component: RayonsoftComponent;
  let fixture: ComponentFixture<RayonsoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RayonsoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RayonsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
