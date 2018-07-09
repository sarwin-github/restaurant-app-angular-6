import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuDataService } from '../../api/menu/menu-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
	req         : Subscription;
	data        : any;
	item_search : string = "All";

	constructor(private router:Router, 
		private activatedRoute: ActivatedRoute,
		private menuDataService: MenuDataService) { }

	ngOnInit() {
		this.getMenuItem();
		console.log(this.data);
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
