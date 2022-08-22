import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public featuredPosts: ICard[] = [
    {
      title: 'Amazing vs extensions you need to know about',
      description: 'Some description here',
      img: 'assets/engineering_1.jpeg',
      tags: ['AI', 'JavaScript', 'express']
    },
    {
      title: 'Amazing vs extensions you need to know about',
      description: 'Some description here',
      img: 'assets/engineering_2.jpeg',
      tags: ['AI', 'JavaScript', 'express']
    },
    {
      title: 'Amazing vs extensions you need to know about',
      description: 'Some description here',
      img: 'assets/engineering_3.png',
      tags: ['AI', 'JavaScript', 'express']
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
