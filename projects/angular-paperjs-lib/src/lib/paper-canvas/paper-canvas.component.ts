import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaperScope, Project, Path, Layer } from 'paper';
import { canvasSize, colorPalettes } from '../settings';

@Component({
  selector: 'plb-paper-canvas',
  templateUrl: './paper-canvas.component.html',
  styleUrls: ['./paper-canvas.component.scss']
})
export class PaperCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvasElement') canvasElement: ElementRef;
   /* Basic config */
  height: string;
  width: string;
  scope: any;
  project: any;

  /* addElements */
  firstPath: any;

  constructor() { }

  ngOnInit(): void {
    /* Basic config */
    this.height = canvasSize.height;
    this.width = canvasSize.width;
    this.scope = new PaperScope();
  }

  ngAfterViewInit(): void {
    this.project = new Project(this.canvasElement.nativeElement);
    this.addElements();
  }

  addElements() {
    const sliceNumber = this.randomNumber(3, 9);
    let x = 0;
    const sides = [];
    let totalSides;
    const palettes = this.randomPalette(colorPalettes);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (let slice = 0; slice < sliceNumber; slice ++) {
      const initNumber = this.getRandomInt(30);
      const lastNumber = this.getRandomInt(350);
      let width = this.randomNumber(initNumber, lastNumber);
      if (totalSides && (slice === sliceNumber - 1)) {
        width = 701 - totalSides;
      }
      sides.push(width);
      totalSides = sides.reduce(reducer);
      const color = 'color' + slice;
      if (slice > 0) {
        x += sides[slice - 1];
      }
      console.log('x', x);
      console.log('width', width);
      console.log('color', colorPalettes[palettes][color]);
      this.firstPath = new Path.Rectangle({
        x,
        y: 0,
        width,
        height: 1201,
        fillColor: colorPalettes[palettes][color],
        blendMode: 'multiply'
      });

      this.project.activeLayer.addChild(this.firstPath);
    }
  }

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

}
