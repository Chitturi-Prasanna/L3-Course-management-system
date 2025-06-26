import { Component, inject, signal } from '@angular/core';
import { CourseService, mycourse } from '../../../services/get/course.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-courses',
  imports: [MatCardModule],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.scss'
})
export class MyCoursesComponent {
  ngOnInit(): void {
    this.getMyCourses()
  }
  get=inject(CourseService)
  myCourses=signal<mycourse['coursesEnrolled']>([])
  getMyCourses(){
    this.get.myCourses().subscribe({
      next:(val)=>{
        console.log(val[0].coursesEnrolled)
        this.myCourses.set(val[0].coursesEnrolled)
        
      }
    })
  }

  
}
