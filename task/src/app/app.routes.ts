import { Routes } from '@angular/router';
import { authGuard } from './pages/guards/auth.guard';
const LoginPageComponent = () => import('../app/pages/login-page/login-page.component').then(c => c.LoginPageComponent)
const StudentDashboardComponent = () => import('../app/pages/student/student-dashboard/student-dashboard.component').then(c => c.StudentDashboardComponent)
const InstructorDashboardComponent = () => import('../app/pages/instructor/instructor-dashboard/instructor-dashboard.component').then(c => c.InstructorDashboardComponent)
const AdminDashboardComponent = () => import('../app/pages/admin/admin-dashboard/admin-dashboard.component').then(c => c.AdminDashboardComponent)
const AddCourseComponent = () => import('../app/pages/instructor/add-course/add-course.component').then(c => c.AddCourseComponent)

const adminRoutes = () => import('../app/pages/admin/admin-dashboard/routes').then(c => c.adminRoutes)
const studentRoutes = () => import('../app/pages/student/student-dashboard/routes').then(c => c.studentRoutes)
// const instructorRoutes = () => import('../app/pages/instructor/instructor-dashboard/routes').then(c => c.instructorRoutes)

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: LoginPageComponent,
        canActivate:[authGuard]
    },
    {
        path: 'student',
        loadComponent: StudentDashboardComponent,
        loadChildren: studentRoutes
        // canActivate:[]
    },
    {
        path: 'admin',
        loadComponent: AdminDashboardComponent,
        // canActivate:[]
        loadChildren: adminRoutes
    },
    {
        path: 'instructor',
        loadComponent: InstructorDashboardComponent,
        // loadChildren:instructorRoutes
    },
    {
        path:'add-course',
        loadComponent:AddCourseComponent
    }
];
