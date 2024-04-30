import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  url = 'https://agile-depths-63211-0290749cc0cd.herokuapp.com/todoapp/todos/';

  private addedTodoSubject = new Subject<Todo>();
  addedTodo$ = this.addedTodoSubject.asObservable();

  constructor(private http: HttpClient) {}

  addTodo(todo: Todo) {
    this.http.post<Todo>(this.url, todo).subscribe((todo) => {
      this.addedTodoSubject.next(todo);
    });
  }
}
