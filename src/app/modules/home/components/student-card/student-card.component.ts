import { Component, Input, OnInit } from '@angular/core';
import Person from 'src/app/modules/shared/models/person.model';

@Component({
  selector: 'app-student-card',
  template: `
    <div class="student-card">
      <div class="header">
        <img class="avatar" [src]="student.avatar">
      </div>
      <div class="institution-stripe">

      </div>
      <div class="name-stripe">
        <span style="font-size: 1.15em; font-weight: 500;">{{ student.firstname + " " + student.middlename }}</span><br>
        <span>{{ student.lastname + " " + student.lastname2 }}</span><br>
      </div>
      <div class="body"></div>
      <button mat-stroked-button>ABRIR TARJETA VIRTUAL</button>
      <div class="code"><span >{{ "CODIG: " + student.id }}</span></div>
    </div>
  `,
  styles: [`
    .body {
      height: 150px;
      background-image: url("../../../../../assets/img/logo.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      filter: grayscale(100%);
      filter: opacity(0.2)

    };
    .header{
      height: 35px;
    };
    .avatar {
      position: absolute;
      margin-top: 8px;
      margin-left: 16px;
      height: 100px;
      border-radius: 4px;
      border: 2px solid #353f49;
      
    };
    .institution-stripe {
      background-color: #918145;
      min-height: 35px;
    };
    .student-card {
      display: flex;
      flex-direction: column;
      justify-content:  center;
      text-align: center;
      border: 1px solid #bcc0c1;
      margin: 4px;
      min-width: 250px;
      background-color: #232f3f;
      color: white;
      text-rendering: optimizeLegibility;
    };
    .name-stripe {
      background-color: #425059;
      padding: 2px 8px;
      text-align: left;
    };
    button {
      margin: 16px 16px;
      border: 1px solid #918145 !important;
      background-color: #1b2934;
    }

    .code {
      margin-bottom: 8px;
    }
  `]
})
export class StudentCardComponent implements OnInit {

  @Input() student!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
