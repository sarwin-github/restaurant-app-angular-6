import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  selector: 'about-restaurant',
  animations: [fadeIn],
  templateUrl: './about-restaurant.component.html',
  styleUrls: ['./about-restaurant.component.scss']
})
export class AboutRestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
