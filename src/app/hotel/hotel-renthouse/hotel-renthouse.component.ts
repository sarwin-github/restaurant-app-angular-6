import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';

@Component({
	selector: 'app-hotel-renthouse',
	animations: [fadeIn],
	templateUrl: './hotel-renthouse.component.html',
	styleUrls: ['./hotel-renthouse.component.scss']
})
export class HotelRenthouseComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		let div = document.getElementById('hotel-renthouse').offsetTop;
		window.scrollTo({ left: 0, top: div - 101, behavior: 'smooth' });
	}

}
