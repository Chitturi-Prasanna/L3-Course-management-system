import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { course, CourseService, myCourses } from '../../../services/get/course.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-instructor-dashboard',
  imports: [MatToolbarModule,MatButtonModule,MatCardModule],
  templateUrl: './instructor-dashboard.component.html',
  styleUrl: './instructor-dashboard.component.scss'
})
export class InstructorDashboardComponent implements OnInit{
  ngOnInit(): void {
    this.myCourses()
  }
  router=inject(Router)
  course=inject(CourseService)
  courseList=signal<course[]>([])
  Logout(){
    localStorage.setItem('token','')
    this.router.navigate(['login'])
  }

  myCourses(){
    this.course.getCourses().subscribe({
      next:(val)=>{
        console.log("val",val)
        this.courseList.set(val)
      }
    })
  }

  addCourse(){
    this.router.navigate(['add-course'])
  }

}
