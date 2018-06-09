import { MatchesService } from './matches/matches.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { MatComponentModule } from './mat-component/mat-component.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditCourseComponent } from './home/edit-course/edit-course.component';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.pipe';
import { ListMatchesComponent } from './matches/list-matches.component';
import { PronosticsComponent } from './pronostics/pronostics.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MaterialModule } from './material/material.module';
import { ToutCombPossibleSuMatchService } from './matches/toutCombPossibleSuMatch.service';
import { TableauFinalService } from './matches/tableauFinal.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditCourseComponent,
    CoursesComponent,
    SummaryPipe,
    ListMatchesComponent,
    PronosticsComponent,

  ],
  entryComponents: [
    EditCourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    Ng2SmartTableModule,
    MatComponentModule,
    FormsModule,
    ReactiveFormsModule
/*     MatAutocomplete,
    MatOption */

  ],
  providers: [
    ToutCombPossibleSuMatchService,
    TableauFinalService,
    MatchesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
