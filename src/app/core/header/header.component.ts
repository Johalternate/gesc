import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faker } from '@faker-js/faker';
import { map, Observable, startWith } from 'rxjs';

import Person from 'src/app/modules/shared/models/person.model';
import { ApiService } from '../http/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {

  menu: {name: string, icon: string}[] = [];

  loggedUsers: Observable<Person[]> = this.db.getOnlinePersonel();
  students: Observable<Person[]> = this.db.getStudents();
  
  constructor(private db: ApiService) { }

  ngOnInit(): void {
    // populate menu
    for (let i = 1; i < 8; i++) {
      this.menu.push( { name: faker.hacker.noun(), icon: `${i}` } );
    }

  }

}
