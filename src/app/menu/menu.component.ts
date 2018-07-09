import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeIn } from '../animations/fadeIn';

@Component({
	selector: 'app-menu',
	animations: [fadeIn],
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	constructor() { }

	ngOnInit() {
		const div = document.getElementById('main-menu').offsetTop;
		window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
	}
	
	ngOnDestroy(){
	}
}
