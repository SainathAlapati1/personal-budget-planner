import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  myForm!: FormGroup;

  constructor( @Inject('formBuilder')private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['',Validators.required],
    });
  }
}
