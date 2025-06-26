import { Component, inject, signal } from '@angular/core';
import { CourseService, course } from '../../../services/get/course.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  ngOnInit(): void {
    this.getAllCourses()
  }
  get=inject(CourseService)
  allCourses=signal<course[]>([])
  getAllCourses(){
    this.get.getCourses().subscribe({
      next:(val)=>{
        console.log(val)
        this.allCourses.set(val)
      }
    })
  }

  onEnrollClick(courseName:string){
    this.get.enrollToCourse(courseName).subscribe({
      next:(val)=>{
        console.log(val)
      }
    })
  }
}
