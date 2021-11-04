import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      const scrolled = window.scrollY;
      if (scrolled === 0 ) {
        header?.classList.toggle('header-scrolling', false);
      } else {
        header?.classList.toggle('header-scrolling', true);
      }
    });
  }

  public collapseItems() {
    const itemB = document.getElementById('item-flex-2');
    const itemC = document.getElementById('item-flex-3');
    const itemD = document.getElementById('item-flex-4');
    const itemE = document.getElementById('item-flex-5');

    itemB?.classList.toggle('item-b-collapse', true);
    itemC?.classList.toggle('item-c-collapse', true);
    itemD?.classList.toggle('item-d-collapse', true);
    itemE?.classList.toggle('item-e-collapse', true);
  }

  public regroupItems() {
    const itemB = document.getElementById('item-flex-2');
    const itemC = document.getElementById('item-flex-3');
    const itemD = document.getElementById('item-flex-4');
    const itemE = document.getElementById('item-flex-5');

    itemB?.classList.toggle('item-b-collapse', false);
    itemC?.classList.toggle('item-c-collapse', false);
    itemD?.classList.toggle('item-d-collapse', false);
    itemE?.classList.toggle('item-e-collapse', false);
  }

  public onClick(id: string) {
    console.log('Click to: ' + id);
  }
}
