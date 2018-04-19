import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ComponentCounterValue: number;
  constructor() {
    this.ComponentCounterValue = 50;
  }
}
