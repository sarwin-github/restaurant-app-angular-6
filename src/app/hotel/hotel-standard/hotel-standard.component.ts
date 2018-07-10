import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  selector: 'app-hotel-standard',
  animations: [fadeIn],
  templateUrl: './hotel-standard.component.html',
  styleUrls: ['./hotel-standard.component.scss']
})
export class HotelStandardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let div = document.getElementById('standard-room').offsetTop;
  	window.scrollTo({ left: 0, top: div - 98, behavior: 'smooth' });
  }

}
