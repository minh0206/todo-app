import { Section } from './section';
import { Todo } from './todo';

export interface Project {
  id: number;
  name: string;
  sections: Section[];
  todos: Todo[];
}
