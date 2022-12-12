import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean = false;
  logIn = false;
  isValidUser: boolean = false;



  constructor(private fb: FormBuilder,private router: Router,
    private authService: AuthService) { }

  ngOnInit(){

  }
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  

onLogin() {
  this.authService
    .login(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe((user) => {
      if (user) {
        this.router.navigate(['/home/dashboard']);  
      }
      this.logIn = true;
      this.isValidUser = user;
    });
}



}
