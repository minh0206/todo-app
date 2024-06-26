import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Section } from '../models/section';

@Injectable()
export class ProjectService {
  url =
    'https://agile-depths-63211-0290749cc0cd.herokuapp.com/todoapp/projects/';

  constructor(private http: HttpClient) {}

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(this.url + id);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('access_token')}`,
      },
    });
  }

  getSections(projectId: number): Observable<Section[]> {
    return this.http.get<Section[]>(this.url + projectId + '/sections/');
  }
}
