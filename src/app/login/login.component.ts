import { Router } from '@angular/router/';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/*export interface User {
  username: string;
  password: string;
  fullname: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}*/

@Component({
  selector: 'login-tacocloud',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userLogin: any;
  hide = true;

  logInfo = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() { }

  // Login
  get email() { return this.logInfo.get('email'); }
  get password() { return this.logInfo.get('password'); }

  login() {
    
    this.userLogin = this.logInfo.value;

    this.router.navigate(['/home']);

  }
}
