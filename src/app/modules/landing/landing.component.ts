import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public readonly NORMAL_HEIGHT = '100vh';
  public readonly MIN_HEIGHT = '50vh';
  public heightOnScroll = this.NORMAL_HEIGHT;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const scrollFactor = window.scrollY * 9;
      // this.heightOnScroll = `-${ scrollFactor }px`;
      const landingSection = document.getElementById('landing-section');
      const scrolled = window.scrollY;
      if (scrolled === 0 ) {
        // landingSection?.classList.toggle('landing-section-scrolling', false);
      } else {
        // landingSection?.classList.toggle('landing-section-scrolling', true);
      }
    });
  }
}
