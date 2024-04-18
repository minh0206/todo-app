import { Todo } from './todo';

export interface Section {
  id: number | null;
  name: string;
  todos: Todo[];
}
