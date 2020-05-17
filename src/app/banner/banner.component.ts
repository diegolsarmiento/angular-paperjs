import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  availableWidth: number;
  availableHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.availableWidth = 1201;
    this.availableHeight = 301;
  }

}
