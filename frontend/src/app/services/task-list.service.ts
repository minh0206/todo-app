import { Injectable } from '@angular/core';
import { TaskList } from '../models/task-list';
import { TaskItem } from '../models/task-item';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  deleteTask(task: TaskItem) {
    throw new Error('Method not implemented.');
  }

  items: TaskList[] = [
    {
      name: 'To do',
      taskList: [
        { name: 'Get to work', description: 'task description', done: false },
        {
          name: 'Pick up groceries',
          description: 'task description',
          done: false,
        },
        { name: 'Go home', description: 'task description', done: false },
        { name: 'Fall asleep', description: 'task description', done: false },
        { name: 'Get to work', description: 'task description', done: false },
        {
          name: 'Pick up groceries',
          description: 'task description',
          done: false,
        },
        { name: 'Go home', description: 'task description', done: false },
        { name: 'Fall asleep', description: 'task description', done: false },
        { name: 'Get to work', description: 'task description', done: false },
        {
          name: 'Pick up groceries',
          description: 'task description',
          done: false,
        },
        { name: 'Go home', description: 'task description', done: false },
        { name: 'Fall asleep', description: 'task description', done: false },
      ],
    },
    {
      name: 'Done',
      taskList: [
        { name: 'Get up', description: 'task description', done: true },
        {
          name: 'Brush teeth',
          description: 'task description',
          done: true,
        },
        {
          name: 'Take a shower',
          description: 'task description',
          done: true,
        },
        { name: 'Check e-mail', description: 'task description', done: true },
        { name: 'Walk dog', description: 'task description', done: true },
      ],
    },
  ];

  constructor() {}

  addTask(task: TaskItem, listName: string) {
    const list = this.items.find((item) => item.name === listName);

    if (list) {
      list.taskList.push(task);
    } else {
      this.items.push({ name: listName, taskList: [task] });
    }
  }

  getItems(): TaskList[] {
    return this.items;
  }

  removeItem(item: TaskList): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items = this.items.splice(index, 1);
    }
  }

  saveItems(): void {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  loadItems(): void {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }
}
