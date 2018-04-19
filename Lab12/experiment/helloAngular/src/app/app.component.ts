import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'HelloWorld';
  private console($event: {}): void {
    this.title = "BLOBLO";
    console.log($event);
  }
}
