import { Injectable } from '@angular/core';

@Injectable()
/** Dummy version of an authenticated user service */
export class RandomInts {
  sample() {
    return Math.floor(Math.random() * 11);
    //return Math.floor(Math.random() * 6);
  }
  get() {
    return [this.sample(),this.sample()];
  }
}

@Injectable()
export class Operation {
  //operators = ['+','-'];
  operators = ['+','--','-','*','/'];
  get() {
    return this.operators[Math.floor(Math.random() * (this.operators.length-1))];
  }
}
