import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  selector: 'app-hotel-villa',
  animations: [fadeIn],
  templateUrl: './hotel-villa.component.html',
  styleUrls: ['./hotel-villa.component.scss']
})
export class HotelVillaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let div = document.getElementById('hotel-villa').offsetTop;
  	window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
  }

}
