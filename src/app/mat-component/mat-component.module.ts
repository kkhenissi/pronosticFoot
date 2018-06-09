import { NgModule } from '@angular/core';
import {MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatChipsModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatCardModule,
  MatTabsModule,
  MatDialogModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
  ]
})
export class MatComponentModule { }
