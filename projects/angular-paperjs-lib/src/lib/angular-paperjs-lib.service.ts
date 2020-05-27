import { Injectable } from '@angular/core';
import { colorPalettes } from './settings';

@Injectable({
  providedIn: 'root'
})
export class AngularPaperjsLibService {

  constructor() { }

  randomNumber(min, max): number {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
  }

  getRandomInt(max): number {
    const randomInt = Math.floor(Math.random() * Math.floor(max));
    return randomInt;
  }

  randomPalette(palettes): any {
    const numberKeys = Object.keys(palettes).length;
    const set = this.getRandomInt(numberKeys);
    const palette = Object.keys(colorPalettes)[set];
    return palette;
  }

  checkColorDuplicated(sliceNumber, colorArray): number {
    let colorSlide = this.getRandomInt(sliceNumber);
    if (colorArray.indexOf(colorSlide) === -1) {
      colorArray.push(colorSlide);
    } else {
      for (let item = 0; item <= sliceNumber; item ++) {
        if (colorArray.indexOf(item) === -1) {
          colorSlide = item;
          colorArray.push(colorSlide);
          break;
        }
      }
    }
    return colorSlide;
  }

  randomDecimal(min, max): number {
    const random = (Math.random() * (max - min) + min).toFixed(2);
    return random;
  }
}
