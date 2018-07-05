import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { AboutRestaurantComponent } from './about-restaurant/about-restaurant.component';
import { FoodsComponent } from './foods/foods.component';
import { FacilitiesComponent } from './facilities/facilities.component';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule,
  	RouterModule.forRoot(homeRoute)
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    HeaderCarouselComponent,
    AboutRestaurantComponent,
    FoodsComponent,
    FacilitiesComponent
  ],
  providers: []
})

export class HomeRoutingModule { }