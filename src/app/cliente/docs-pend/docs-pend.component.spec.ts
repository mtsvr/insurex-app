/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocsPendComponent } from './docs-pend.component';

describe('DocsPendComponent', () => {
  let component: DocsPendComponent;
  let fixture: ComponentFixture<DocsPendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsPendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsPendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
