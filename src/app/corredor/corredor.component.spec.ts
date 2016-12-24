/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorredorComponent } from './corredor.component';

describe('CorredorComponent', () => {
  let component: CorredorComponent;
  let fixture: ComponentFixture<CorredorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorredorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
