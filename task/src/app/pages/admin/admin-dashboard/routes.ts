import { Routes } from '@angular/router';
const CoursesComponent=()=>import('./courses/courses.component').then(c=>c.CoursesComponent)
const UsersComponent=()=>import('../users/users.component').then(c=>c.UsersComponent)

export const adminRoutes: Routes = [
    {
        path:'',
        redirectTo:'courses',
        pathMatch:'full'
    },
    {
        path:'courses',
        loadComponent:CoursesComponent,
    },
    {
        path:'users',
        pathMatch:'full',
        loadComponent:UsersComponent,
    }
];
