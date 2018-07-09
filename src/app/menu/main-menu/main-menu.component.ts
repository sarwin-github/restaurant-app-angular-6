import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuDataService } from '../../api/menu/menu-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  	selector: 'main-menu',
  	animations: [fadeIn],
  	templateUrl: './main-menu.component.html',
  	styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
	req         : Subscription;
	data        : any;
	item_search : string = "All";
	lat: number = 14.0616;
    lng: number = 121.5721;

	constructor(private router:Router, 
		private activatedRoute: ActivatedRoute,
		private menuDataService: MenuDataService) { }

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
		this.getMenuItem();
	}

	goToMenu(): void{
		let div = document.getElementById('main-menu').offsetTop;
		window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
	}

	getMenuItem(): void{
		this.req = this.menuDataService.getMenuItems().subscribe(x => {
			this.data = x.default['restaurant-menu'];
		});
	};

	ngOnDestroy(){
		this.req.unsubscribe();
	}

}
