import { Router } from '@angular/router/';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  user: User;
  redirect: any;

  registration = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    fullname: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  // Registration
  get username() { return this.registration.get('username'); }
  get password() { return this.registration.get('password'); }
  get fullname() { return this.registration.get('fullname'); }
  get street() { return this.registration.get('street'); }
  get city() { return this.registration.get('city'); }
  get state() { return this.registration.get('state'); }
  get zip() { return this.registration.get('zip'); }
  get phoneNumber() { return this.registration.get('phoneNumber'); }

  register() {
    
    this.user = this.registration.value;

    this.http.post('http://localhost:8080/register', this.user).subscribe(value => {
      this.redirect = value;
    });

    this.router.navigate(['/login']);

  }

}
