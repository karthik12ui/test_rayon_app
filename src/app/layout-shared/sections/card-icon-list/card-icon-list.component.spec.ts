/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardIconListComponent } from './card-icon-list.component';

describe('CardIconListComponent', () => {
  let component: CardIconListComponent;
  let fixture: ComponentFixture<CardIconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
