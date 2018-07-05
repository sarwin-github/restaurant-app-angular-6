import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'footer-navigation',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	lat: number = 14.0616;
    lng: number = 121.5721;

	constructor() { }

	ngOnInit() {
		
	}
}
