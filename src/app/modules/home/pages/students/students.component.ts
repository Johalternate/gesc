import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import Person from 'src/app/modules/shared/models/person.model';

@Component({
  selector: 'app-students',
  template: `
    <div class="wrapper">
      <ng-container *ngFor="let student of students | async">
        <app-student-card [student]="student"></app-student-card><br>
      </ng-container>
    </div>
  `,
  styles: [`
    .wrapper {
      
    }
  `]
})
export class StudentsComponent implements OnInit {

  students: Observable<Person[]> = this.db.getStudents();

  constructor(private db: ApiService) { }

  ngOnInit(): void {
    
  }

}
