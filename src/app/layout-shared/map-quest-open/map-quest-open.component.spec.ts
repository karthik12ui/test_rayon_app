/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapQuestOpenComponent } from './map-quest-open.component';

describe('MapQuestOpenComponent', () => {
  let component: MapQuestOpenComponent;
  let fixture: ComponentFixture<MapQuestOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapQuestOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapQuestOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
