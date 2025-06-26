import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-student-dashboard',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,MatButtonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  router=inject(Router)
  Logout(){
    localStorage.setItem('token','')
    this.router.navigate(['login'])
  }
}
