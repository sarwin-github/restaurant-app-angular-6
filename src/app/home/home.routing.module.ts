import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { AboutRestaurantComponent } from './about-restaurant/about-restaurant.component';
import { FoodsComponent } from './foods/foods.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SearchPipe } from '../pipes/search-pipes';

// Menu
import { MainMenuComponent } from '../menu/main-menu/main-menu.component';
import { MenuPackageAllOccationsComponent as MenuPackageAll } from '../menu/menu-package-all-occations/menu-package-all-occations.component';
import { MenuCarouselComponent } from '../menu/menu-carousel/menu-carousel.component';
import { MenuPreorderBasisComponent as MenuPreOrder } from '../menu/menu-preorder-basis/menu-preorder-basis.component';
import { MenuNativeStyleWeddingComponent as MenuNativeWed } from '../menu/menu-native-style-wedding/menu-native-style-wedding.component';
import { MenuNatureCrestWeddingComponent as MenuNatureCrestWed} from '../menu/menu-nature-crest-wedding/menu-nature-crest-wedding.component';
import { MenuKiddiePartyComponent as MenuKiddieParty } from '../menu/menu-kiddie-party/menu-kiddie-party.component';

// Hotel
import { HotelsMainComponent } from '../hotel/hotels-main/hotels-main.component';
import { HotelCarouselComponent } from '../hotel/hotel-carousel/hotel-carousel.component';
import { HotelRenthouseComponent } from '../hotel/hotel-renthouse/hotel-renthouse.component';
import { HotelVillaComponent } from '../hotel/hotel-villa/hotel-villa.component';
import { HotelDormitoryComponent } from '../hotel/hotel-dormitory/hotel-dormitory.component';
import { HotelStandardComponent } from '../hotel/hotel-standard/hotel-standard.component';
import { HotelDeluxeComponent } from '../hotel/hotel-deluxe/hotel-deluxe.component';

// Facilities
import { FacilitiesMainComponent } from '../facilities/facilities-main/facilities-main.component';

// Restaurant
import { RestaurantComponent } from '../restaurant/restaurant.component';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent },
    { path: 'menu', 
      children: [
        { path: '', component: MainMenuComponent },
        { path: 'all-occations', component: MenuPackageAll },
        { path: 'per-order-basis', component: MenuPreOrder },
        { path: 'native-style-wedding', component: MenuNativeWed },
        { path: 'nature-crest-wedding', component: MenuNatureCrestWed },
        { path: 'kiddie-party', component: MenuKiddieParty },
      ] 
    },
    { path: 'hotels', 
      children: [
        { path: '', component: HotelsMainComponent },
        { path: 'rest-house', component: HotelRenthouseComponent },
        { path: 'villa-rooms', component: HotelVillaComponent },
        { path: 'dormitory', component: HotelDormitoryComponent },
        { path: 'standard', component: HotelStandardComponent },
        { path: 'deluxe', component: HotelDeluxeComponent },
      ] 
    },
    { path: 'facilities', 
      children: [
        { path: '', component: FacilitiesMainComponent }
      ] 
    },
    { path: 'restaurant', 
      children: [
        { path: '', component: RestaurantComponent }
      ] 
    }
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
    MainMenuComponent,
    MenuPackageAll,
    MenuCarouselComponent,
    MenuPreOrder,
    MenuNativeWed,
    MenuNatureCrestWed,
    MenuKiddieParty,
    HotelsMainComponent,
    HotelCarouselComponent,
    HotelRenthouseComponent,
    HotelVillaComponent,
    HotelDormitoryComponent,
    HotelStandardComponent,
    HotelDeluxeComponent,
    FacilitiesMainComponent,
    HeaderCarouselComponent,
    AboutRestaurantComponent,
    RestaurantComponent,
    FoodsComponent,
    FacilitiesComponent,
    SearchPipe
  ],
  providers: []
})

export class HomeRoutingModule { }