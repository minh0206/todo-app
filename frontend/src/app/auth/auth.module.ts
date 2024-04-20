import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  declarations: [AuthComponent, LogInComponent, SignUpComponent],
})
export class AuthModule {}
