import { Component, Input } from '@angular/core';
import { Section } from '../../models/section';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrl: './section-detail.component.css',
})
export class SectionDetailComponent {
  @Input() section!: Section;

  drop(event: CdkDragDrop<Todo[], any, any>) {
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
    }
  }
}
