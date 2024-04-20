import { Component, HostListener, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Project } from '../../models/project';
import { Section } from '../../models/section';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
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
export class ProjectDetailComponent implements OnInit {
  isScrolled: boolean = false;
  project$!: Observable<Project>;

  projectId?: number;

  sections: Section[] = [];
  nullSection: Section = {
    id: null,
    name: '',
    todos: [],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private todoService: TodoService
  ) {
    todoService.addedTodo$.subscribe((todo: Todo) => {
      if (todo.project !== this.projectId) {
        return;
      }

      if (todo.section === null) {
        this.nullSection.todos.push(todo);
      } else {
        const section = this.sections.find(
          (section) => section.id === todo.section
        );

        if (section) {
          section.todos.push(todo);
        }
      }
    });
  }

  ngOnInit(): void {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.projectService.getProject(params.get('id')!)
      )
    );

    this.project$.subscribe((project: Project) => {
      const todos: Todo[] = project.todos;

      project.sections.forEach((section) => {
        section.todos = todos.filter((todo) => todo.section === section.id);
      });

      this.projectId = project.id;
      this.nullSection.todos = todos.filter((todo) => todo.section === null);
      this.sections = project.sections;
    });
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
}
