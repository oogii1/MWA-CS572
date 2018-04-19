import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, ViewChild } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  // encapsulation: ViewEncapsulation.Native,
  inputs: ['name: naamee'],
  outputs: ['oops: outThis']
})
export class HelloComponent implements OnInit {
  private hoho: string;
  set name(a: string) {
    this.hoho = a;
    console.log('naamee is called');
  }
  @Input('otherInput') set sda(a: string) {
    console.log(a);
  }

  private ee: EventEmitter<{}> = new EventEmitter<{}>();
  get oops(): EventEmitter<{}> {
    return this.ee;
  }

  constructor() {
    this.hoho = "HOHOHOHO";
    console.log('Hello ctor!! ===');
  }

  @ViewChild('asd') asd: {};

  ngOnInit() {
    console.log('HELLO.ngOnInit is called');
    setTimeout(() => {
      this.ee.emit({ this: 'is', out: 'put' });
    }, 5000);
  }

}
