import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course | undefined;
  @Input({required:true})
  index:number | undefined;
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor(){}

  ngOnInit(){
    
  }

  onCourseViewed() {
    console.log('Course Viewed -- Card Component button clicked');
    this.courseEmitter.emit(this.course);
    }

    cardClasses() {
      if (this.course) {
        return {
          'beginner': this.course.category === 'BEGINNER',
          'intermediate': this.course.category === 'INTERMEDIATE',
          'advanced': this.course.category === 'ADVANCED'
        };
      }
      else {
        return {};
      }
    }

    cardClasses2() {
      if(this.course?.category === 'BEGINNER') {
        return ['beginner'];
      }
      else if(this.course?.category === 'ADVANCED') {
        return ['advanced'];
      }
      else {
        return [];
    }
}
}
