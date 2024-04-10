import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  { path: '', redirectTo: '/inbox', pathMatch: 'full' },
  { path: 'inbox', component: InboxComponent },
  { path: 'today', component: TodayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
