import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  year: number;
  fontFamly: string;
  fontSize: string;
  fontSizeNumber: number;

  constructor() { }

  ngOnInit(): void {
    this.randomFont();
    this.ramdomSizes();
  }

  ramdomSizes() {
    this.year = this.randomNumber(1960, 2828);
    this.fontSizeNumber = this.randomNumber(92, 98);
    this.fontSize = this.fontSizeNumber + 'px';
  }

  randomFont(){
    const fontsArray = ['Righteous', 'Fjalla One', 'Teko'];
    const fontsArrayLength = fontsArray.length;
    this.fontFamly = fontsArray[this.randomNumber(0, fontsArrayLength)];

  }

  randomNumber(min, max): number {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
  }

}
