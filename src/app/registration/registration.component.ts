import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
  
import { ConfirmPasswordValidator } from '../validator'



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  submitted: boolean = false;
  hide:boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }
  
  registerForm : FormGroup = this.fb.group(
      {
        email: ["",Validators.required],
        password: ["",Validators.required],
        confirmPassword: ["",Validators.required]
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    );
  
  onSubmit() {
    this.submitted = true;
  }
}