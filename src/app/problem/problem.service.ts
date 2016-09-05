import { Injectable } from '@angular/core';
import { Problem } from './problem';
let Chance = require('chance');
let chance = new Chance();

@Injectable()
export class ProblemService {
  private max_num: number;
  private operators: string[];
  sample_weighted() {
//    return chance.natural({min: 0, max: this.max_num});
    return chance.weighted(
      Array.apply(null, {length: this.max_num}).map(Number.call, Number),
      [1, 1].concat(Array(this.max_num - 2).fill(3)));
  }
  next(): Problem {
    return new Problem([this.sample_weighted(), this.sample_weighted()],
         this.operators[chance.natural({min: 0, max: this.operators.length})]);
  }
  set_parameters(max_num: number, operators: string[]) {
    this.max_num = max_num;
    this.operators = operators;
  }

}
