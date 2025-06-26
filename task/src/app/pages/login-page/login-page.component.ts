import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  router=inject(Router)
  auth = inject(AuthService)
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    role:new FormControl('')
  })

  onRegister() {
    console.log(this.loginForm.value)
    this.auth.postCred(this.loginForm.value.email!, this.loginForm.value.password!,this.loginForm.value.role!).subscribe({
      next: (val) => {
        console.log(val)
        localStorage.setItem('token',val.accessToken)
        this.router.navigate([`student`])
      }
    })
  }

  loginClick(){
    this.auth.login(this.loginForm.value.email!,this.loginForm.value.password!).subscribe({
      next:(val)=>{
        console.log('val',val)
        localStorage.setItem('token',val.accessToken)
        if(val.user.role){
          this.router.navigate([`${val.user.role}`])
        }
        else{
          this.router.navigate([`admin`])
        }
      }
    })
  }

  validate(){
    if(this.loginForm.invalid && this.loginForm.dirty){
      return 'Please enter all the fields'
    }
    return
  }


}
