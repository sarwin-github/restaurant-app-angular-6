import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';
import { fadeIn } from '../../animations/fadeIn';
import { slideIn } from '../../animations/slide-in';

@Component({
	selector: 'app-facilities-main',
	animations: [fadeIn, trigger('slideInOut', [
		transition(':enter', [
		    style({transform: 'translateY(20%)'}),
		    animate('700ms ease-in', style({transform: 'translateY(0%)'}))
		    ]),
		transition(':leave', [
		    animate('700ms ease-in', style({transform: 'translateY(20%)'}))
		])
	])],
	templateUrl: './facilities-main.component.html',
	styleUrls: ['./facilities-main.component.scss']
})
export class FacilitiesMainComponent implements OnInit {
	visible: boolean = true;

	constructor() { }

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	goToMenu(): void{
      	let div = document.getElementById('facilities').offsetTop;
		window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
    }

}
