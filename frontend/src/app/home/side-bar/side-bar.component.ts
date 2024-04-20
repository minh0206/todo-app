import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../../services/todo.service';
import { AddTodoModalComponent } from '../modals/add-todo-modal/add-todo-modal.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  constructor(
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  logout() {
    this.authService.logout();
  }

  openAddTodoModal() {
    const modalRef = this.modalService.open(AddTodoModalComponent);
    // modalRef.componentInstance.name = 'World';
  }
}
