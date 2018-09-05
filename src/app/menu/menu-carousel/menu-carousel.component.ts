import { Component, OnInit } from '@angular/core';
import { allAnimation } from '../../animations/all-animation';

@Component({
  selector: 'menu-carousel',
  animations: [allAnimation],
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.scss']
})
export class MenuCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }




}
