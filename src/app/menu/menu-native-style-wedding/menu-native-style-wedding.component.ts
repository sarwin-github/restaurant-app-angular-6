import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../../animations/slide-in';
import { fadeIn } from '../../animations/fadeIn';

@Component({
	selector: 'app-menu-native-style-wedding',
	animations: [scrollAnimation, fadeIn],
	templateUrl: './menu-native-style-wedding.component.html',
	styleUrls: ['./menu-native-style-wedding.component.scss']
})
export class MenuNativeStyleWeddingComponent implements OnInit {
	state: string = 'show'
	constructor() { }

	ngOnInit() {
		let div = document.getElementById('native-style').offsetTop;
		window.scrollTo({ left: 0, top: div - 101, behavior: 'smooth' });
	}

}
