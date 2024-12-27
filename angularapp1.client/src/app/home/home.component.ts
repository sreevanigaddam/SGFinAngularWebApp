import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public authService: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated())
      this.router.navigate(['/login']);
  }
}
