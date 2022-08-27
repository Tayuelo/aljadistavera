import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})
export class BioPageComponent implements OnInit {

  public brands = [
    {
      id: '1',
      name: 'Banco General de Panamá',
      summary: 'Had the opportunity to work with one of the best  teams called Yappy, on a mobile project built with Ionic Framework.',
      logo: 'static/banco-panama_logo.jpeg'
    },
    {
      id: '2',
      name: 'Fairway Independent Mortgage Corp.',
      summary: 'Had the opportunity to work with one of the best  teams called Yappy, on a mobile project built with Ionic Framework.',
      logo: 'static/fairway_logo.png'
    },
    {
      id: '3',
      name: 'FIS',
      summary: 'Had the opportunity to work with one of the best  teams called Yappy, on a mobile project built with Ionic Framework.',
      logo: 'static/fis_logo.png'
    },
    {
      id: '4',
      name: 'Globant',
      summary: 'Had the opportunity to work with one of the best  teams called Yappy, on a mobile project built with Ionic Framework.',
      logo: 'static/globant_logo.jpeg'
    }
  ]

  constructor() { }

  ngOnInit(): void {}
}
