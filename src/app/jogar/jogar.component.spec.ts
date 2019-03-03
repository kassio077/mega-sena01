/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JogarComponent } from './jogar.component';

describe('JogarComponent', () => {
  let component: JogarComponent;
  let fixture: ComponentFixture<JogarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
