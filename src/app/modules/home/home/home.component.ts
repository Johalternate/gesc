import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterStudentComponent } from '../components/register-student/register-student.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public modal: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.openModal();
  }

  openModal(): void {
    const modalRef = this.modal.open(RegisterStudentComponent, {
      
    });

    modalRef.backdropClick().subscribe(result => {
      this.openSnackBar();
    });

    modalRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSnackBar() {
    this._snackBar.open('Registro cancelado', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  
}
