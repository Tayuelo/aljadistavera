import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [LandingComponent]
})
export class LandingModule { }
