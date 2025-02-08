import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from "../course-card/course-card.component";
import { COURSES } from '../../db-data';
import { Course } from '../model/model';

@Component({
  selector: 'app-courses',
  imports: [CourseCardComponent,CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
 
  courses = [...COURSES];
  //coreCourse = COURSES[0];
  //rxjsCourse = COURSES[1];
  //ngrxCourse = COURSES[2];
  startDate = new Date(2020, 0, 1);

  data={title : 'Courses'};

  constructor() { }

  onClick($event: MouseEvent) {
    console.log('Clicked', $event);
    }

    onKeyUp(newTile: string) {
    this.data.title = newTile;
      }

      onCourseSelected(course:Course) {
        console.log("Course card clicked - Courses Component",course);
        }

}
