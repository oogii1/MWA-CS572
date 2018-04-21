import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: []
})
export class StudentsComponent implements OnInit {
  constructor(private db: DbService) { }

  private studentsList: { id: string, name: string, stuID: string, email: string }[];
  ngOnInit() {
    this.studentsList = this.db.getData();
  }

}
