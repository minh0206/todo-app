import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { SectionDetailComponent } from './section-detail/section-detail.component';
import { ProjectService } from '../services/project.service';
import { TodoService } from '../services/todo.service';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectsDetailComponent,
    TodoDetailComponent,
    SectionDetailComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, DragDropModule, FormsModule],
  exports: [
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectsDetailComponent,
  ],
  providers: [ProjectService, TodoService],
})
export class ProjectsModule {}
