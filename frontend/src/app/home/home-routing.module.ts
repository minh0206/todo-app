import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { authGuard } from '../auth/auth.guard';
import { ProjectListComponent } from './project-list/project-list.component';

const homeRoutes: Routes = [
  {
    path: 'home',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          { path: 'inbox', component: InboxComponent },
          { path: 'today', component: TodayComponent },
          { path: 'projects', component: ProjectListComponent },
          {
            path: 'project',
            children: [{ path: ':id', component: ProjectDetailComponent }],
          },
          {
            path: '',
            redirectTo: 'inbox',
            pathMatch: 'full',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
