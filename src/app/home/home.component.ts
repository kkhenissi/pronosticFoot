import { CoursesComponent } from './../courses/courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
/* import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule, MatCheckboxModule, MatRadioButton, MatSelectModule, MatIconModule } from '@angular/material';
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// will used for the pipe
  produit = {
    title: 'The Complete Angular Course',
    rating: 4.9845,
    students: 30125,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

// will used width custom pipe
text ='dsdsdsdds You can chain pipes together in potentially useful combinations. In the following example, to display the birthday in uppercase, the birthday is chained to the DatePipe and on to the UpperCasePipe. The birthday displays as APR 15, 1988.'





// used with mat-progress-spinner
progress = 0;
timer;
isActive = false;
constructor(private dialog: MatDialog) {
  this.timer = setInterval(() => {
    this.progress++;
    if (this.progress === 100) {clearInterval(this.timer)}
  }, 200);
 };


  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  isChecked = false;

  categories = [
    { name: 'Beginner'},
    { name: 'Intermediate'},
    { name: 'Advencd'}
  ];


  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  colors = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Yellow'}
  ];
  color = 2;



  ngOnInit() {
  }

  onChange($event) {
     this.isChecked = !this.isChecked;
  }
  selectCategory(category) {
    this.categories
      .filter(c => c !== category)
    //  .forEach(c => c['name'] = 'hhhh')
      .forEach(c => c['selected'] = false);

      category.selected = !category.selected;


  }

  // for opendialog
  openDialog() {
      this.dialog.open(EditCourseComponent)
          .afterClosed()
          .subscribe(result => console.log(result));
  }



}
