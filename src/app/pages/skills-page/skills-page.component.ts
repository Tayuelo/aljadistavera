import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {

  public skills = [
    {
      logo: 'static/angular_logo.png',
      name: 'Angular',
      rate: '100%'
    },
    {
      logo: 'static/nodejs_logo.png',
      name: 'Node.js',
      rate: '100%'
    },
    {
      logo: 'static/ionic_logo.png',
      name: 'Ionic Framework',
      rate: '100%'
    },
    {
      logo: 'static/html_logo.png',
      name: 'HTML',
      rate: '100%'
    },
    {
      logo: 'static/css_logo.png',
      name: 'CSS',
      rate: '100%'
    },
    {
      logo: 'static/js_logo.png',
      name: 'JavaScript',
      rate: '100%'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
