import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errormessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    // Perform login logic here
    this.authService.login();
    this.router.navigate(['/home']);
  }
}



