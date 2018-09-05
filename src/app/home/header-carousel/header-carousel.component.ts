import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';
import { allAnimation } from '../../animations/all-animation';

@Component({
  selector: 'header-carousel',
  animations: [fadeIn, allAnimation],
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.scss']
})
export class HeaderCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
