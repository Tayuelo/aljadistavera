import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsDto } from 'src/app/models';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  public projects: ProjectsDto[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(data => {
      this.projects = data;
    }).unsubscribe();
    console.log(this.projects);
  }
}