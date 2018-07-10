import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fadeIn';

@Component({
  selector: 'app-facilities-main',
  animations: [fadeIn],
  templateUrl: './facilities-main.component.html',
  styleUrls: ['./facilities-main.component.scss']
})
export class FacilitiesMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
