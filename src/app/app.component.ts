import { Component } from '@angular/core';
import { Operation, RandomInts }   from './app.service';

export class Problem {
  numerator: number;
  denominator: number;
  answer: number;
  operator: string;
  correct: boolean = undefined;
  constructor(ints: number[], op: string) {
    if (op == '*') {
      this.operator = '&times';
      this.numerator = ints[0];
      this.denominator = ints[1];
      this.answer = ints[0] * ints[1];
    }
    else if (op == '/') {
      this.operator = '&divide';
      if (ints[0] == 0 || ints[1] == 0)
        throw new RangeError();
      this.numerator = ints[0] * ints[1];
      this.denominator = ints[1];
      this.answer = ints[0];
    }
    else if (op == '+') {
      this.operator = '+';
      this.numerator = ints[0];
      this.denominator = ints[1];
      this.answer = ints[0] + ints[1];
    }
    else if (op == '--') {
      this.operator = '-';
      this.numerator = ints[0] + ints[1];
      this.denominator = ints[0];
      this.answer = this.numerator - this.denominator;
    }
    else {
      this.operator = '-';
      this.numerator = Math.max(ints[0], ints[1]);
      this.denominator = Math.min(ints[0], ints[1]);
      this.answer = this.numerator - this.denominator;
    }
  }
}

@Component({
  selector: 'app-root',
  template: `
  <div (window:keydown)="setValues($event)" class="testing">
    {{problem.numerator}} <span [innerHTML]="problem.operator"></span> {{problem.denominator}} = {{value}}
    <div><span class="tmp">Number correct: {{numCorrect}}</span></div>
  </div>
  `,
  styles: [`
  :host {
    display: block;
    margin: auto;
    width: 400px;
    color: white;
    text-align: center;
    font-size: 50pt;
    font-family: sans-serif;
  }
  .tmp {
    width: 50%;
    text-align: center;
    font-size: 20pt;
    font-family: sans-serif;
  }
  .testing {
    background-color: cornflowerblue;
  }
  .right {
    background-color: #7f7;
  }
  .wrong {
    background-color: #f77;
  }
  `]
})
export class AppComponent {
  private value: string = '';
  private problem: Problem;
  private numCorrect: number = 0;
  constructor(private ints: RandomInts, private operation: Operation) {
    this.problem = new Problem(ints.get(),operation.get());
  }

  setValues(event: KeyboardEvent) {
    if (event.key == 'Backspace') {
      this.value = this.value.substring(0, this.value.length-1);
      event.preventDefault();
    }
    else if (event.key == 'Enter') {
      this.submitValues();
    }
    else if (!isNaN(Number(event.key)))
      this.value += event.key;
  }
  submitValues() {
    this.problem.correct = this.value.length !== 0 && Number(this.value) == this.problem.answer;
    if (!this.problem.correct) {
      //alert("Wrong!");
      this.value = '';
    }
    else {
      this.numCorrect += 1;
      var tryagain = true;
      while (tryagain) {
        try {
          this.problem = new Problem(this.ints.get(), this.operation.get());
          tryagain = false;
          this.value = '';
        } catch (e) {}
      }
    }
  }
}
