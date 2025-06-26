import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { course } from './course.service';

export interface users{
  id:string,
  email:string,
  role?:string
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  http = inject(HttpClient)
  getUsers() {
    return this.http.get<users[]>('users')
  }
}
