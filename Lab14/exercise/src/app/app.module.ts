import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component';
import { DbService } from './db.service';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
