import { Routes } from '@angular/router';
const CoursesComponent=()=>import('../courses/courses.component').then(c=>c.CoursesComponent)
const MyCoursesComponent=()=>import('../my-courses/my-courses.component').then(c=>c.MyCoursesComponent)

export const studentRoutes: Routes = [
    {
        path:'',
        redirectTo:'course',
        pathMatch:'full'
    },
    {
        path:'course',
        loadComponent:CoursesComponent,
    },
    {
        path:'myCourses',
        pathMatch: 'full',
        loadComponent:MyCoursesComponent
    }
];
