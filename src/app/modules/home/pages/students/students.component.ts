import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import Person from 'src/app/modules/shared/models/person.model';

@Component({
  selector: 'app-students',
  template: `
    
    <div class="wrapper">
      <div class="actions"></div>
      <div class="students">
        
        <div class="students-cards">
          <ng-container *ngFor="let student of students | async">
            <app-student-card [student]="student"></app-student-card><br>
          </ng-container>
        <div>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .actions {
      min-width: 350px;
    };
    .students-cards, .students {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
  `]
})
export class StudentsComponent implements OnInit {

  students: Observable<Person[]> = this.db.getStudents();

  constructor(private db: ApiService) { }

  ngOnInit(): void {
    
  }

}
