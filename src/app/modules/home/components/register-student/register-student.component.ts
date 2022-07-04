import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {
  
  @Input() closeButtonCallback!:  () => void;

  firstName = new FormControl('primary');
  secondName = new FormControl('primary');
  
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    firstName: this.firstName
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value || 0);
  }

  close() {

    if (this.closeButtonCallback) {
      this.closeButtonCallback();
    }

  }

}
