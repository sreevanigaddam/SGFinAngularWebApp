import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errormessage: string = '';

  constructor(private http: HttpClient, private router: Router) { } 

  ngOnInit(): void
  {
    // Initialization logic here
  }

  onSubmit(): void {
    this.login(this.username, this.password);
  }

  login(username: string, password: string): void {
    const url = 'http://localhost:5190/Login'; // Replace with your backend URL
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    this.http.post(url, body, { headers })
      .subscribe(response => {
        console.log('Login successful', response);
        this.router.navigate(['home']);
        // Handle successful login here
      }, error => {
        this.errormessage = 'Login failed';
        console.error(this.errormessage, error);
        // Handle login error here
      });
  }
}
