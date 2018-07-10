import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';

@Component({
	selector: 'app-hotels-main',
	animations: [fadeIn],
	templateUrl: './hotels-main.component.html',
	styleUrls: ['./hotels-main.component.scss']
})
export class HotelsMainComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	goToMenu(): void{
      	let div = document.getElementById('hotel-main').offsetTop;
		window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
    }

}
