import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { StudentsComponent } from './students.component';

const llllllll: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomeComponent },
    { path: 'students', component: StudentsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(llllllll)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: []
})
export class AppRoutingModule { }