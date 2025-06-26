import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface register {
  accessToken:string
  user: {
    email: string,
    id: string
    role: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)

  //register
  postCred(email: string, password: string, role: string) {
    return this.http.post<register>('register', {
      email: email,
      password: password,
      role: role
    })
  }

  login(email: string, password: string) {
    return this.http.post<register>('login', {
      email: email,
      password: password
    })
  }
}
