import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../../../services/get/course.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-add-course',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  location=inject(Location)
  course=inject(CourseService)
  addCourse = new FormGroup({
    courseName: new FormControl('', [Validators.email, Validators.required]),
    duration: new FormControl('', [Validators.required]),
  });
  constructor(private http:HttpClient){}

  onSubmit(){
    this.course.addCourse(this.addCourse.value.courseName!,this.addCourse.value.duration!).subscribe({
      next:(val)=>{
        console.log(val);
        alert('course added')
        this.location.back()
      }
    })
  }
}
