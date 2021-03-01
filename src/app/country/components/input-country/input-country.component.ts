import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styles: [
  ]
})
export class InputCountryComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();
  word = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(val => {
        this.onDebounce.emit(val);
      });
  }

  search(): void {
    this.onEnter.emit(this.word);
  }

  pushKey() {
    this.debouncer.next(this.word);
  }

}
