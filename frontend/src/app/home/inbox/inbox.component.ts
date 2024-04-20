import { Component, HostListener } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css',
  animations: [
    trigger('flyInOut', [
      state(
        'flyIn',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'flyOut',
        style({
          opacity: 0,
          transform: 'translateY(100%)',
        })
      ),
      transition('flyIn => flyOut', [animate(150)]),
      transition('flyOut => flyIn', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate(200),
      ]),
    ]),
    trigger('scrolledTrigger', [
      state('true', style({ opacity: 0 })),
      state('false', style({ opacity: 1 })),
      transition('false <=> true', animate(300)),
    ]),
  ],
})
export class InboxComponent {
  isScrolled: boolean = false;

  categories: any;
  lists: any;
  // this.taskListService.getItems();

  constructor() {}

  viewTask(task: Todo) {
    console.log(task);
  }

  delete(task: Todo) {
    // this.taskListService.deleteTask(task);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      // this.taskListService.addTask(
      //   { name: 'Get to work', description: 'task description', done: false },
      //   'To do'
      // );
    }
  }

  onScroll(event: any) {
    if (event.target.scrollTop === 0) {
      this.isScrolled = false;
    } else {
      this.isScrolled = true;
    }
  }

  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      let item: Todo = event.item.data;
      if (event.container.id === 'cdk-drop-list-0') {
        item.done = false;
      } else {
        item.done = true;
      }
    }
  }

  doneChanged(taskItem: Todo) {
    // const todoList = this.lists.find((list) => list.name === 'To do')?.taskList;
    // const doneList = this.lists.find((list) => list.name === 'Done')?.taskList;
    // if (!todoList) return;
    // if (!doneList) return;
    // if (taskItem.done) {
    //   let currentIndex = todoList.indexOf(taskItem);
    //   let targetIndex: number = doneList.length;
    //   transferArrayItem(todoList, doneList, currentIndex, targetIndex);
    // } else {
    //   let currentIndex = doneList.indexOf(taskItem);
    //   let targetIndex: number = todoList.length;
    //   transferArrayItem(doneList, todoList, currentIndex, targetIndex);
    // }
  }
}
