import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { AboutRestaurantComponent } from './about-restaurant/about-restaurant.component';
import { FoodsComponent } from './foods/foods.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { MenuComponent } from '../menu/menu.component';
import { SearchPipe } from '../pipes/search-pipes';
import { MainMenuComponent } from '../menu/main-menu/main-menu.component';
import { PackagesAllComponent as MenuPackageAll } from '../menu/packages-all/packages-all.component';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent }
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
    MenuComponent,
    MainMenuComponent,
    MenuPackageAll,
    HeaderCarouselComponent,
    AboutRestaurantComponent,
    FoodsComponent,
    FacilitiesComponent,
    SearchPipe
  ],
  providers: []
})

export class HomeRoutingModule { }