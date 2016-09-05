
export class Problem {
  first: number;
  second: number;
  operator: string;
  private answer: number;
  constructor(ints: number[], op: string) {
    if (op === '*') {
      this.operator = '&times';
      this.first = ints[0];
      this.second = ints[1];
      this.answer = ints[0] * ints[1];
    }
    else if (op === '/') {
      this.operator = '&divide';
      if (ints[0] === 0 || ints[1] === 0) {
        throw new RangeError();
      }
      this.first = ints[0] * ints[1];
      this.second = ints[1];
      this.answer = ints[0];
    }
    else if (op === '+') {
      this.operator = '+';
      this.first = ints[0];
      this.second = ints[1];
      this.answer = ints[0] + ints[1];
    }
    else if (op === '--') {
      this.operator = '-';
      this.first = ints[0] + ints[1];
      this.second = ints[0];
      this.answer = this.first - this.second;
    }
    else {
      this.operator = '-';
      this.first = Math.max(ints[0], ints[1]);
      this.second = Math.min(ints[0], ints[1]);
      this.answer = this.first - this.second;
    }
  }

  check(value: number): boolean {
    return value === this.answer;
  }
}

