import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../../animations/slide-in';
import { fadeIn } from '../../animations/fadeIn';

@Component({
	selector: 'app-menu-kiddie-party',
	animations: [scrollAnimation, fadeIn],
	templateUrl: './menu-kiddie-party.component.html',
	styleUrls: ['./menu-kiddie-party.component.scss']
})
export class MenuKiddiePartyComponent implements OnInit {
	state: string = 'show'
	constructor() { }

	ngOnInit() {
		let div = document.getElementById('native-style').offsetTop;
		window.scrollTo({ left: 0, top: div - 102, behavior: 'smooth' });
	}


}
