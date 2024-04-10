import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent {
  taskName!: string;
  description!: string;

  constructor(
    private modalService: NgbModal,
    private taskListService: TaskListService
  ) {}

  openAddTaskModal(content: TemplateRef<any>) {
    const modalRef = this.modalService.open(content, {
      backdropClass: 'transparent-backdrop',
    });

    // on closed
    modalRef.closed.subscribe((result) => {
      if (result === 'add') {
        this.taskListService.addTask(
          { name: this.taskName, description: this.description, done: false },
          'To do 2'
        );
      }
    });

    // clear on hidden
    modalRef.hidden.subscribe(() => {
      this.taskName = '';
      this.description = '';
    });
  }
}
