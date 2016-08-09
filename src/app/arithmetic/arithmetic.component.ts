import { Component, OnInit } from '@angular/core';
import { NgForm }            from '@angular/forms';
//import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
//import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'arithmetic',
  templateUrl: 'arithmetic.component.html',
  styleUrls: ['arithmetic.component.css'],
  //directives: [MdButton, MD_CARD_DIRECTIVES],
})
export class ArithmeticComponent implements OnInit {
  answer: number = 50;
  constructor() {}

  ngOnInit() {
  }

  onSubmit() { alert(this.answer); }
}
