import { Component, OnInit } from '@angular/core';
import { NameService } from './kids/kids.service';

import '../style/app.scss';

@Component({
  selector: 'kid-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private child: string = 'Children';

  constructor(private names: NameService) {}
  ngOnInit() {
    this.names.nameSink.subscribe(name => { this.child = name; });
  }
}
