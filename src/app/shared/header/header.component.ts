import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'header-navigation',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	fixed: boolean = false;
  	constructor() { }

  	ngOnInit() {
 	}

 	@HostListener('window:scroll', ['$event']) onWindowScroll(e) {
 	  const number = e.target.documentElement.scrollTop;
 	  if (number > 80) {
 	    this.fixed = true;
 	    console.log(this.fixed)
 	  } else if (this.fixed && number < 70) {
 	    this.fixed = false;
 	    console.log(this.fixed)
 	  }
 	}

}
