import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hotels-main',
	templateUrl: './hotels-main.component.html',
	styleUrls: ['./hotels-main.component.scss']
})
export class HotelsMainComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

}
