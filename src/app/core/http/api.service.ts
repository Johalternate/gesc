import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker';
import Person from 'src/app/modules/shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // fake students database
  private _students: Person[] = [];

  // fake online personel
  private _onlinePersonel: Person[] = [];

  constructor() {}

  /**@description Returns an observable of online personel db */
  getOnlinePersonel(): Observable<Person[]> {
    this.populateOnlinePersonelDatabase(5);
    return of(this._onlinePersonel);
  }

  /**@description Returns an observable of students db */
  getStudents(): Observable<Person[]> {
    this.populateStudentsDatabase(15);
    return of(this._students);
  }

  // populate fake online personel database
  private populateOnlinePersonelDatabase(count: number): void {

    for (let i = 0; i < count; i++) {
      this._onlinePersonel.push(this.generateFakePerson());
    }

  }

  // populates fake students database
  private populateStudentsDatabase(count: number): void {

    for (let i = 0; i < count; i++) {
      this._students.push(this.generateFakePerson());
    }

  }

  // creates a fake student profile
  private generateFakePerson(): Person {
    const idTypes: ('id'| 'passport'| 'rnc'| 'other')[] = ['id', 'passport', 'rnc', 'other'];
    const genders: ('male' | 'female')[] = ['male', 'female'];
    const academicYears: (2020 | 2021 | 2022)[] = [2020, 2021, 2022];
    const workingHours: ('weekend' | 'morning' | 'afternoon' | 'night')[] = ['weekend', 'morning', 'afternoon', 'night']
    const grades: ('sexto' | 'septimo')[] = ['sexto', 'septimo']
    return {
      avatar: faker.image.avatar(),
      firstname: faker.name.firstName(),
      middlename: faker.name.middleName(),
      lastname: faker.name.lastName(),
      lastname2: faker.name.lastName(),
      idType: idTypes[Math.floor(Math.random() * idTypes.length)],
      id: Math.floor(Math.random()*(10**11)),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      sex: genders[Math.floor(Math.random() * genders.length)],
      dob: faker.date.past(16),
      placeOfBirth: faker.address.county(),
      address: faker.address.streetAddress(),
      residence: faker.address.county(),
      sector: faker.address.cityName(),
      celular: faker.phone.phoneNumber(),
      academicYear: academicYears[Math.floor(Math.random() * academicYears.length)],
      workingHours: workingHours[Math.floor(Math.random() * workingHours.length)],
      grade: grades[Math.floor(Math.random() * grades.length)]
    };
  }

}
