import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturedDto } from 'src/app/models/feature.model';
import { FeatureService } from 'src/app/services/feature.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [FeatureService]
})
export class HomePageComponent implements OnInit {

  public featured: FeaturedDto[] = [];

  constructor(private featureService: FeatureService, private router: Router) { }

  async ngOnInit() {
    this.featured = await this.featureService.getFeatures();
  }

  public goTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
