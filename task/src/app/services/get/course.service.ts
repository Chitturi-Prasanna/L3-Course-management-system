import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, switchMap,tap } from 'rxjs';

export interface course {
  "courseId": string,
  "courseName": string,
  "instructorName": string,
  "duration": string
}

export interface mycourse {

  "id": number,
  "studentId": string,
  "coursesEnrolled": string[]

}

export interface myCourses {
  coursesEnrolled: string[]
}


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  http = inject(HttpClient)
  getCourses() {
    return this.http.get<course[]>('courses')
  }

  myCourses() {
    return this.http.get<mycourse[]>('studentCourses')
  }

  enrollToCourse(courseName: string) {
    // First get current studentCourses with id=6
    return this.http.get<any>('studentCourses/6').pipe(
      switchMap(studentCourse => {
        // Add the new course if not already enrolled
        const updatedCourses = studentCourse.coursesEnrolled.includes(courseName)
          ? studentCourse.coursesEnrolled
          : [...studentCourse.coursesEnrolled, courseName];

        // PATCH updated coursesEnrolled array
        console.log(updatedCourses)
        return this.http.patch('studentCourses/6', { coursesEnrolled: updatedCourses });
      })
    );
  }
  
  addCourse(courseName: string, duration: string) {
  return this.http.get<any[]>('courses').pipe(
    tap((courses: any) => {
      console.log('GET response (all courses):', courses);
    }),
    map((courses: any[]) => {
      const maxId = Math.max(...courses.map(c => +c.courseId));
      const newCourse = {
        courseId: (maxId + 1).toString(),
        courseName,
        instructorName: 'instructor',
        duration
      };
      return newCourse;
    }),
    switchMap(newCourse =>
      this.http.post('courses', newCourse)
    )
  );
}

  
}
