import { Component, OnInit } from '@angular/core';
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

  constructor(private featureService: FeatureService) { }

  async ngOnInit() {
    this.featured = await this.featureService.getFeatures();
  }
}
