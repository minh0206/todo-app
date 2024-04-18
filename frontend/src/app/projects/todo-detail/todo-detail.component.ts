import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent {
  doneChanged(todo: Todo) {
    console.log(todo);
  }
  viewTask(todo: Todo) {
    console.log(todo);
  }

  @Input() todo!: Todo;
}
