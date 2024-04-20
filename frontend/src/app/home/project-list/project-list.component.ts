import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  projects!: Project[];

  constructor(private projectService: ProjectService) {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
