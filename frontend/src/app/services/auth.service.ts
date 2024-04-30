import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private errorSubject = new Subject<any>();
  // private url = 'http://127.0.0.1:8000/auth';
  private url = 'https://agile-depths-63211-0290749cc0cd.herokuapp.com/auth';

  errorMessage$ = this.errorSubject.asObservable();
  isLoggedIn: boolean = false;
  userId?: number;
  userName?: string;

  constructor(private router: Router, private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post(this.url + '/jwt/create/', { username, password })
      .pipe(
        catchError((error) => {
          // set error message
          this.errorSubject.next(error.error);
          return throwError(() => error);
        })
      )
      .subscribe((data: any) => {
        // continue with login
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);

        this.loadUser();
      });
  }

  signup(username: string, password: string) {
    this.http
      .post(this.url + '/users/', { username, password })
      .pipe(
        catchError((error) => {
          this.errorSubject.next(error.error);
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        this.login(username, password);
      });
  }

  loadUser() {
    return this.http
      .get(this.url + '/users/me/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('access_token')}`,
        },
      })
      .pipe(catchError((error) => throwError(() => error)))
      .subscribe((data: any) => {
        this.userId = data.id;
        this.userName = data.username;

        this.isLoggedIn = true;
        this.router.navigate(['home']);
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isLoggedIn = false;
    this.router.navigate(['auth']);
  }
}
