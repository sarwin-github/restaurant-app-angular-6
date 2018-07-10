import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  selector: 'app-hotel-deluxe',
  animations: [fadeIn],
  templateUrl: './hotel-deluxe.component.html',
  styleUrls: ['./hotel-deluxe.component.scss']
})
export class HotelDeluxeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let div = document.getElementById('deluxe-room').offsetTop;
  	window.scrollTo({ left: 0, top: div - 97, behavior: 'smooth' });
  }

}
