import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsDto } from 'src/app/models';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  providers: [ProjectsService]

})
export class ProjectsPageComponent implements OnInit {

  public projects: ProjectsDto[] = [];

  constructor(private projectsService: ProjectsService) { }

  async ngOnInit() {
    this.projects = await this.projectsService.getProjects();
  }
}