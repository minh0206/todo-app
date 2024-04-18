import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  url = 'http://127.0.0.1:8000/todoapp/todos/';

  private addedTodoSubject = new Subject<Todo>();
  addedTodo$ = this.addedTodoSubject.asObservable();

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo) {
    this.http.post<Todo>(this.url, todo).subscribe((todo) => {
      this.addedTodoSubject.next(todo);
    });
  }
}
