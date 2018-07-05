import { Component, OnInit } from '@angular/core';
declare const require: any;
const data = require('../menu/menu-items.json');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log(data)
  }

}
