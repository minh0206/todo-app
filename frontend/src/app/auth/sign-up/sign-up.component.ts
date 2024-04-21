import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  username: string = '';
  password: string = '';

  errorMessage$: Observable<any> = this.authService.errorMessage$;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.signup(this.username, this.password);
  }
}
