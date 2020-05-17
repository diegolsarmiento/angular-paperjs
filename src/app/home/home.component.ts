import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  availableWidth: number;
  availableHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.availableWidth = 701;
    this.availableHeight = 1201;
  }

}
