import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';
import { fadeIn } from '../animations/fadeIn';

@Component({
  selector: 'app-restaurant',
  animations: [fadeIn, trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateY(45%)'}),
      animate('700ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
    transition(':leave', [
      animate('700ms ease-in', style({transform: 'translateY(45%)'}))
      ])
    ])],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  visible: boolean = true;

  constructor() { }

  ngOnInit() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  goToMenu(): void{
    let div = document.getElementById('restaurant-main').offsetTop;
    window.scrollTo({ left: 0, top: div - 100, behavior: 'smooth' });
  }

}
