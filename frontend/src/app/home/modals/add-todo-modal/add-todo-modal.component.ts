import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/project.service';
import { Section } from '../../../models/section';
import { Todo } from '../../../models/todo';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.css'],
})
export class AddTodoModalComponent {
  activeModal = inject(NgbActiveModal);
  @Output() newItemEvent = new EventEmitter<string>();

  name!: string;
  description!: string;
  selectedSection: string = 'inbox';
  selectedProjectId = 1;
  selectedSectionId: number | null = null;

  projects: Project[] = [];

  constructor(
    projectService: ProjectService,
    private todoService: TodoService
  ) {
    projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  selectProject(project: Project) {
    this.selectedProjectId = project.id;
    this.selectedSection = project.name;
  }

  selectProjectSection(project: Project, section: Section) {
    this.selectedProjectId = project.id;
    this.selectedSectionId = section.id;
    this.selectedSection = project.name + ' - ' + section.name;
  }

  addTodo() {
    const todo: Todo = {
      project: this.selectedProjectId,
      section: this.selectedSectionId,
      name: this.name,
      description: this.description,
      done: false,
    };

    this.todoService.addTodo(todo);
    this.activeModal.close();
  }
}
