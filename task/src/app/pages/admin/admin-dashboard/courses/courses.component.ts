import { Component, inject, OnInit, signal } from '@angular/core';
import { course, CourseService } from '../../../../services/get/course.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-courses',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
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

  editCourse(id:string){
    // ro
  }
}
