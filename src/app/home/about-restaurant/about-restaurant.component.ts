import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';
import { slideIn } from '../../animations/slide-in';
import { allAnimation } from '../../animations/all-animation';

@Component({
	selector: 'about-restaurant',
	animations: [fadeIn, slideIn, allAnimation],
	templateUrl: './about-restaurant.component.html',
	styleUrls: ['./about-restaurant.component.scss']
})
export class AboutRestaurantComponent implements OnInit {
	visible: boolean = true;
	constructor() { }

	ngOnInit() {
	}

}
