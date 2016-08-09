import { Component } from '@angular/core';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ArithmeticComponent]
})
export class AppComponent {
  title = `Can't use directive!`;
}
