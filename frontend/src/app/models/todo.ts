export interface Todo {
  project: number;
  section: number | null;
  name: string;
  description: string;
  done: boolean;
}
