import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faker } from '@faker-js/faker';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  options: any[] = [];
  loggedUsers: any[] = []
  searchableUsers!: Observable<any>;
  searchControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    // populate options
    for (let i = 0; i < 8; i++) {
      this.options.push( { name: faker.hacker.noun() } );
    }

    // populate logged users
    for (let i = 0; i < 14; i++) {
      this.loggedUsers.push({
          name: faker.name.findName(),
          avatar: faker.image.avatar()
        });
    }

    this.searchableUsers = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
