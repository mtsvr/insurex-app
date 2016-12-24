/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolizaCuotasComponent } from './poliza-cuotas.component';

describe('PolizaCuotasComponent', () => {
  let component: PolizaCuotasComponent;
  let fixture: ComponentFixture<PolizaCuotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaCuotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
