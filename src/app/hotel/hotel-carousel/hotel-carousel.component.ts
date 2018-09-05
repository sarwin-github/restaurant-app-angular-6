import { Component, OnInit } from '@angular/core';
import { allAnimation } from '../../animations/all-animation';

@Component({
  selector: 'hotel-carousel',
  animations: [allAnimation],
  templateUrl: './hotel-carousel.component.html',
  styleUrls: ['./hotel-carousel.component.scss']
})
export class HotelCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
