import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  public skills = [
    {
      logo: 'assets/angular_logo.png',
      name: 'Angular',
      rate: '100%'
    },
    {
      logo: 'assets/nodejs_logo.png',
      name: 'Node.js',
      rate: '100%'
    },
    {
      logo: 'assets/ionic_logo.png',
      name: 'Ionic Framework',
      rate: '100%'
    },
    {
      logo: 'assets/html_logo.png',
      name: 'HTML',
      rate: '100%'
    },
    {
      logo: 'assets/css_logo.png',
      name: 'CSS',
      rate: '100%'
    },
    {
      logo: 'assets/js_logo.png',
      name: 'JavaScript',
      rate: '100%'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
