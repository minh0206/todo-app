import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../../services/todo.service';
import { AddTodoModalComponent } from '../modals/add-todo-modal/add-todo-modal.component';
import { AuthService } from '../../services/auth.service';
import { ProjectService } from '../../services/project.service';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  authService = inject(AuthService);
  projects$: Observable<Project[]>;

  constructor(private modalService: NgbModal, projectService: ProjectService) {
    this.projects$ = projectService.getProjects();
  }

  logout() {
    this.authService.logout();
  }

  openAddTodoModal() {
    const modalRef = this.modalService.open(AddTodoModalComponent);
    // modalRef.componentInstance.name = 'World';
  }
}
