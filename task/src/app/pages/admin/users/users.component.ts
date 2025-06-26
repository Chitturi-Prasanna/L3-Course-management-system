import { Component, inject, OnInit, signal } from '@angular/core';
import { users, UsersService } from '../../../services/get/users.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-users',
  imports: [MatCardModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
    ngOnInit(): void {
    this.getAllCourses()
  }
  get=inject(UsersService)
  allUsers=signal<users[]>([])
  getAllCourses(){
    this.get.getUsers().subscribe({
      next:(val)=>{
        console.log(val)
        this.allUsers.set(val)
      }
    })
  }
}
