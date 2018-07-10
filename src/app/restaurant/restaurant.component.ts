import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fadeIn';

@Component({
  	selector: 'app-restaurant',
  	animations: [fadeIn],
  	templateUrl: './restaurant.component.html',
  	styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  	}

  	goToMenu(): void{
      let div = document.getElementById('restaurant-main').offsetTop;
		  window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
    }

}
