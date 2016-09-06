import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NameService {
  private nameSource = new Subject<string>();
  nameSink = this.nameSource.asObservable();
  set_name(name: string) {
    this.nameSource.next(name);
  }
}
