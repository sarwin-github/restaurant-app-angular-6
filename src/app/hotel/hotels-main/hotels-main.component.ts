import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';
import { fadeIn } from '../../animations/fadeIn';

@Component({
	selector: 'app-hotels-main',
	animations: [fadeIn, trigger('slideInOut', [
		transition(':enter', [
		    style({transform: 'translateY(10%)'}),
		    animate('700ms ease-in', style({transform: 'translateY(0%)'}))
		    ]),
		transition(':leave', [
		    animate('700ms ease-in', style({transform: 'translateY(10%)'}))
		])
	])],
	templateUrl: './hotels-main.component.html',
	styleUrls: ['./hotels-main.component.scss']
})
export class HotelsMainComponent implements OnInit {
	visible: boolean = true;

	constructor() { }

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	goToMenu(): void{
      	let div = document.getElementById('hotel-main').offsetTop;
		window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
    }

}
