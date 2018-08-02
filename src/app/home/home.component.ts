import { Component, OnInit, ElementRef } from '@angular/core';
import { fadeIn } from '../animations/fadeIn';

@Component({
  	selector: 'app-home',
  	animations: [fadeIn],
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.scss']
  	
})
export class HomeComponent implements OnInit {
	  lat: number = 14.0616;
    lng: number = 121.5721;
    frameZone: any;
  	
  	constructor(public el: ElementRef) { }

  	ngOnInit() {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

      this.frameZone = Array.from(document.querySelectorAll('a[href^="#"]'));

      this.frameZone.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      }); 
  	}

    goToMenu(): void{
      let div = document.getElementById('about-restaurant').offsetTop;
      window.scrollTo({ left: 0, top: div - 80, behavior: 'smooth' });
    }

}
