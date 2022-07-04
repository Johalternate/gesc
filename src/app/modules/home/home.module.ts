import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { RegisterStudentComponent } from './components/register-student/register-student.component';

import { MaterialModule } from '../material/material.module';
import { StudentsComponent } from './pages/students/students.component';
import { StudentCardComponent } from './components/student-card/student-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterStudentComponent,
    StudentsComponent,
    StudentCardComponent
  ],
  imports: [
    HomeRoutingModule,
    MaterialModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
