import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.login();
  }
}
