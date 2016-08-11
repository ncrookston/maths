import { Injectable } from '@angular/core';

@Injectable()
/** Dummy version of an authenticated user service */
export class RandomInts {
  sample() {
    return Math.floor(Math.random() * 11);
  }
  get() {
    return [this.sample(),this.sample()];
  }
}

@Injectable()
export class Operation {
  operators = ['*','+','-','/'];
  get() {
    return this.operators[Math.floor(Math.random() * 4)];
  }
}
