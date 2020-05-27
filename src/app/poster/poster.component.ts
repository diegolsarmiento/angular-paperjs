import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  availableWidth: number;
  availableHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.availableWidth = 701;
    this.availableHeight = 1201;
  }

}
