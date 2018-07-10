import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  selector: 'app-hotel-dormitory',
  animations: [fadeIn],
  templateUrl: './hotel-dormitory.component.html',
  styleUrls: ['./hotel-dormitory.component.scss']
})
export class HotelDormitoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	let div = document.getElementById('dormitory-room').offsetTop;
  	window.scrollTo({ left: 0, top: div - 99, behavior: 'smooth' });
  }

}
