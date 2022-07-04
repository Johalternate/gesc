import { Component, Input, OnInit } from '@angular/core';
import Person from 'src/app/modules/shared/models/person.model';

@Component({
  selector: 'app-student-card',
  template: `
    <div class="card">
      <span style="font-size: 1.15em; font-weight: bold;">{{ student.firstname + " " + student.middlename }}</span><br>
      <span>{{ student.lastname + " " + student.lastname2 }}</span><br>
      <span>{{ student.id }}</span>
    </div>
  `,
  styles: [`
    .card {
      text-align: center;
      border: 1px solid black;
      border-radius: 12px;
    }
  `]
})
export class StudentCardComponent implements OnInit {

  @Input() student!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
