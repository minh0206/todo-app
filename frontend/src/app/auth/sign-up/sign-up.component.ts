import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  username: string = '';
  password: string = '';

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  ngOnInit() {}
}
