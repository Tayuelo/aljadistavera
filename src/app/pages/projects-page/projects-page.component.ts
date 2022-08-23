import { Component, OnInit } from '@angular/core';
import { ProjectsDto } from 'src/app/models';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {


  public projects: ProjectsDto[] = [
    {
      name: 'Yappy',
      description: 'My journey begins  in the middle of 2019 when I was about to graduate from my Systems Engineer degree at the  Adventist University Corporation - UNAC. I was looking for my first job and was hired by an amazing company called Sofka Technologies.',
      img: 'assets/avatar.png',
      stack: [
        'Angular',
        'React',
        'Node.js',
        'Docker'
      ],
      id: '',
      company: 'Banco General de Panamá',
      duration: '3 months'
    },
    {
      name: 'Yappy',
      description: 'My journey begins  in the middle of 2019 when I was about to graduate from my Systems Engineer degree at the  Adventist University Corporation - UNAC. I was looking for my first job and was hired by an amazing company called Sofka Technologies.',
      img: 'assets/avatar.png',
      stack: [
        'Angular',
        'React',
        'Node.js',
        'Docker'
      ],
      id: '',
      company: 'Banco General de Panamá',
      duration: '3 months'
    },
    {
      name: 'Yappy',
      description: 'My journey begins  in the middle of 2019 when I was about to graduate from my Systems Engineer degree at the  Adventist University Corporation - UNAC. I was looking for my first job and was hired by an amazing company called Sofka Technologies.',
      img: 'assets/avatar.png',
      stack: [
        'Angular',
        'React',
        'Node.js',
        'Docker'
      ],
      id: '',
      company: 'Banco General de Panamá',
      duration: '3 months'
    },
    {
      name: 'Yappy',
      description: 'My journey begins  in the middle of 2019 when I was about to graduate from my Systems Engineer degree at the  Adventist University Corporation - UNAC. I was looking for my first job and was hired by an amazing company called Sofka Technologies.',
      img: 'assets/avatar.png',
      stack: [
        'Angular',
        'React',
        'Node.js',
        'Docker'
      ],
      id: '',
      company: 'Banco General de Panamá',
      duration: '3 months'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}