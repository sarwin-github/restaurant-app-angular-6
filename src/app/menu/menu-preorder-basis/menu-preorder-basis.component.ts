import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../../animations/slide-in';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  	selector: 'app-menu-preorder-basis',
  	animations: [scrollAnimation, fadeIn],
  	templateUrl: './menu-preorder-basis.component.html',
  	styleUrls: ['./menu-preorder-basis.component.scss']
})
export class MenuPreorderBasisComponent implements OnInit {
	lat: number = 14.0616;
    lng: number = 121.5721;
    state: string = 'show'
  	constructor() { }

  	ngOnInit() {
  		let div = document.getElementById('per-order-packages').offsetTop;
		window.scrollTo({ left: 0, top: div - 99, behavior: 'smooth' });
  	}

}
