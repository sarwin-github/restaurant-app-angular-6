import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../../animations/slide-in';
import { fadeIn } from '../../animations/fadeIn';

@Component({
	selector: 'app-menu-nature-crest-wedding',
	animations: [scrollAnimation, fadeIn],
	templateUrl: './menu-nature-crest-wedding.component.html',
	styleUrls: ['./menu-nature-crest-wedding.component.scss']
})
export class MenuNatureCrestWeddingComponent implements OnInit {
	state: string = 'show'
	constructor() { }

	ngOnInit() {
		let div = document.getElementById('nature-crest').offsetTop;
		window.scrollTo({ left: 0, top: div - 98, behavior: 'smooth' });
	}

}
