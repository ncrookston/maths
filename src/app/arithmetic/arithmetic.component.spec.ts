/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ArithmeticComponent } from './arithmetic.component';

describe('Component: Arithmetic', () => {
  it('should create an instance', () => {
    let component = new ArithmeticComponent();
    expect(component).toBeTruthy();
  });
});
