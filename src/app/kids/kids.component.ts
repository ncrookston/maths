import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Problem, ProblemService } from 'app/problem';
import { NameService } from './kids.service';

@Component({
  selector: 'kid-work',
  template: `
  <div (window:keydown)="setValues($event)" class="testing">
    {{current_problem.first}} <span [innerHTML]="current_problem.operator"></span> {{current_problem.second}} = {{value}}
    <div><span class="tmp">Number correct: {{num_correct}}</span></div>
  </div>`,
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private value: string = '';
  private current_problem: Problem;
  private current_attempts: number = 0;
  private wrong_problems: Problem[];
  private num_correct: number = 0;

  constructor(private route: ActivatedRoute, private problems: ProblemService,
    private names: NameService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = params['id'];
       console.log(id);
       // andrew
       let max_number = 12;
       let operators = ['*', '+', '--', '/'];
       switch (id) {
         case 'anne':
          max_number = 10;
          operators = ['+', '--'];
          break;
         case 'kate':
          max_number = 6;
          operators = ['+', '-'];
          break;
        default:
          id = 'andrew';
        }
       this.problems.set_parameters(max_number, operators);
       this.current_problem = this.problems.next();
       this.num_correct = 0;
       this.names.set_name(id);
     });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setValues(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      this.value = this.value.substring(0, this.value.length - 1);
      event.preventDefault();
    }
    else if (event.key === 'Enter' && this.value.length !== 0) {
      this.submitValues();
    }
    else if (!isNaN(Number(event.key))) {
      this.value += event.key;
    }
  }
  submitValues() {
    if (!this.current_problem.check(Number(this.value))) {
      this.current_attempts += 1;
      if (this.current_attempts > 20) {
        this.wrong_problems.push(this.current_problem);
      }
    }
    else {
      this.num_correct += 1;
      this.current_attempts = 0;
      this.current_problem = this.problems.next();
    }
    this.value = '';
  }
}
