import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + 'login'; // Replace with your actual API URL
  private isLoggedIn = false;
  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      map(response => {
        if (response) //&& response.token
        {
          // Store the token and navigate to the home page
          localStorage.setItem('token', response.token);
          this.isLoggedIn = true;
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        // Handle error
        console.error('Login error', error);
        this.isLoggedIn = false;
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

