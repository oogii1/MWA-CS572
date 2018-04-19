import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="changeCounter(-1)">-</button> {{counterValue}} <button (click)="changeCounter(1)">+</button>
  `,
  styles: [],
  inputs: ['counter'],
  outputs: ['counterChange']
})
export class CounterComponent implements OnInit {
  private counterValue = 0;
  private counterEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }

  set counter(c: number) {
    this.counterValue = c;
  }
  get counterChange(): EventEmitter<number> {
    return this.counterEvent;
  }

  ngOnInit() {
  }
  private changeCounter(v: number): void {
    this.counterValue += v;
    this.counterEvent.emit(this.counterValue);
  }
}
