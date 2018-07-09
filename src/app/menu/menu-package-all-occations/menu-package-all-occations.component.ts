import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../../animations/slide-in';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  	selector: 'app-menu-package-all-occations',
  	animations: [scrollAnimation, fadeIn],
  	templateUrl: './menu-package-all-occations.component.html',
  	styleUrls: ['./menu-package-all-occations.component.scss']
})
export class MenuPackageAllOccationsComponent implements OnInit {
	  lat: number = 14.0616;
    lng: number = 121.5721;
    state: string = 'show'

  	constructor() { }

  	ngOnInit() {
  		let div = document.getElementById('main-packages').offsetTop;
		  window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
  	}

}
