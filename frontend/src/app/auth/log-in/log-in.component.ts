import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  username: string = '';
  password: string = '';

  errorMessage$: Observable<any> = this.authService.errorMessage$;

  constructor(private authService: AuthService) {
    this.authService.loadUser();
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.login(this.username, this.password);
    setTimeout(() => {
      this.password = '';
    }, 1000);
  }
}
