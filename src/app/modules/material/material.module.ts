import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

const modules = [
  CommonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatToolbarModule,
  MatDialogModule,
  MatOptionModule,
  ReactiveFormsModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [modules, HttpClientModule],
  exports: [modules]
})
export class MaterialModule { 
  constructor(private iconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    
    for (let i = 1; i <= 17; i++) {
      this.iconRegistry.addSvgIcon(
        `${i}`, 
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/icons/${i}.svg`)
      );  
    }
    
  }
}
