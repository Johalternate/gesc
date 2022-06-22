import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { RegisterStudentComponent } from './components/register-student/register-student.component';

import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterStudentComponent
  ],
  imports: [
    HomeRoutingModule,
    MaterialModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
