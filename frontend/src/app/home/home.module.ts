import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InboxComponent } from './inbox/inbox.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SectionDetailComponent } from './section-detail/section-detail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { ProjectService } from '../services/project.service';
import { TodoService } from '../services/todo.service';
import { AddTodoModalComponent } from './modals/add-todo-modal/add-todo-modal.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    DragDropModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    SideBarComponent,
    InboxComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    SectionDetailComponent,
    TodoDetailComponent,
    AddTodoModalComponent,
  ],
  providers: [ProjectService, TodoService],
})
export class HomeModule {}
