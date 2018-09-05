import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { allAnimation } from '../../animations/all-animation'

@Component({
  selector: 'header-navigation',
  animations: [allAnimation],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	fixed: boolean = false;
  	constructor(private router: Router) { }

  	ngOnInit() {
 	}

 	@HostListener('window:scroll', ['$event']) onWindowScroll(e) {
 	  const number = e.target.documentElement.scrollTop;
 	  if (number > 80) {
 	    this.fixed = true;
 	  } else if (this.fixed && number < 70) {
 	    this.fixed = false;
 	  }
 	}

}
