import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';

const projectsRoutes: Routes = [
  { path: 'projects/:id', component: ProjectsDetailComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
