import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeIn } from '../animations/fadeIn';

@Component({
	selector: 'app-menu',
	animations: [fadeIn],
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	lat: number = 14.0616;
    lng: number = 121.5721;

	constructor() { }

	ngOnInit() {
		let div = document.getElementById('main-menu').offsetTop;
		div = !!div ? div - 100 : 0;
		window.scrollTo({ left: 0, top: div, behavior: 'smooth' });
	}
	
	ngOnDestroy(){
	}
}
