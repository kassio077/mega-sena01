/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelaviviComponent } from './telavivi.component';

describe('TelaviviComponent', () => {
  let component: TelaviviComponent;
  let fixture: ComponentFixture<TelaviviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaviviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaviviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
