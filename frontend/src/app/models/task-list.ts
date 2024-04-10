import { TaskItem } from './task-item';

export interface TaskList {
  name: string;
  taskList: TaskItem[];

  //   addTask(task: TaskItem): void;
  //   getTasks(): TaskItem[];
}
