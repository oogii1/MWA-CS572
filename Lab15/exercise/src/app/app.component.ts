import { Component, ViewChild, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dbService: DbService) { }

  private userData: {} = {
    name: '',
    email: ''
  };
  private userPosts: {}[];
  private ppost: string;
  ngOnInit() {

  }

  @ViewChild('form') form: any;
  suuub(): void {
    console.log('suubbb');
    if (this.form.invalid) {
      return console.log('INVALIIIIIIIIID FORM SEE VALIDATION MESSAGE(S)');
    }
    console.log(this.userData);
    console.log(this.form.form.controls.post.value);
  }

  ggeett() {
    console.log("geeet");
    this.dbService.getUser(1)
      .subscribe(value => {
        this.userData = value;
        console.log(this.userData);
      });
    this.dbService.getPosts(1)
      .subscribe(value => this.userPosts = value);
  }
}
