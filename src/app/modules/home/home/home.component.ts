import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterStudentComponent } from '../components/register-student/register-student.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsService } from 'src/app/core/notifications/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public modal: MatDialog, private _snackBar: MatSnackBar, private notifications: NotificationsService) { }

  ngOnInit(): void {
    
  }

  openModal(): void {
    const modalRef = this.modal.open(RegisterStudentComponent, {
      
    });

    modalRef.backdropClick().subscribe(result => {
      this.notify('Registro cancelado', 'Descartar');
    });

    modalRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  notify(message: string, action: string) {
    this.notifications.notify(message, action)
  }
  
}
