import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['home']);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['auth']);
  }
}
