import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-one',
  template: `
    <ul>
      <li *ngFor="let item of data">{{item}}</li>
    </ul>
  `,
  styles: [],
  inputs: ['data: strings']
})
export class OneComponent implements OnInit {

  constructor() { }

  data: string[];

  ngOnInit() {
  }

}
