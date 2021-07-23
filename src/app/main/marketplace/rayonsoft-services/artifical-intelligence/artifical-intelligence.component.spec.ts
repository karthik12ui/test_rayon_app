/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtificalIntelligenceComponent } from './artifical-intelligence.component';

describe('ArtificalIntelligenceComponent', () => {
  let component: ArtificalIntelligenceComponent;
  let fixture: ComponentFixture<ArtificalIntelligenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtificalIntelligenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtificalIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
