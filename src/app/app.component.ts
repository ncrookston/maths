import { Component } from '@angular/core';
import { RandomInts }   from './randomints.service';

@Component({
  selector: 'app-root',
  template: '<div>{{ints.int1}} {{ints.int2}}</div>'
})
export class AppComponent {
  constructor(private ints: RandomInts) {}
}
