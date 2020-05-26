import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PaperScope, Project, Path, Color, Point } from 'paper';
import { colorPalettes } from '../settings';

@Component({
  selector: 'plb-paper-canvas',
  templateUrl: './paper-canvas.component.html',
  styleUrls: ['./paper-canvas.component.scss']
})
export class PaperCanvasComponent implements OnInit, AfterViewInit {

  @Input() availableWidth: number;
  @Input() availableHeight: number;

  @ViewChild('canvasElement') canvasElement: ElementRef;
   /* Basic config */
  height: number;
  width: number;
  scope: any;
  project: any;
  layer: any;
  colorArray = [];

  /* addElements */
  firstPath: any;

  constructor() { }

  ngOnInit(): void {
    /* Basic config */
    this.height = this.availableHeight;
    this.width = this.availableWidth;
    this.scope = new PaperScope();
  }

  ngAfterViewInit(): void {
    this.project = new Project(this.canvasElement.nativeElement);
    this.addElements();
  }

  addElements() {
    let realWidth;
    let realHeight;
    let realX;
    let realY;
    const sliceNumber = this.randomNumber(3, 9);
    let x = 0;
    const sides = [];
    let totalSides;
    const palettes = this.randomPalette(colorPalettes);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (let slice = 0; slice <= sliceNumber; slice ++) {
      const initNumber = this.randomNumber(20, 60);
      const lastNumber = this.randomNumber(30, 100);
      let width = this.randomNumber(initNumber, lastNumber);
      if (totalSides && (slice === sliceNumber - 1)) {
        if (this.width > this.height) {
          width = this.height - totalSides;
        } else {
          width = this.width - totalSides;
        }
      }
      sides.push(width);
      totalSides = sides.reduce(reducer);
      const colorSlide =  this.checkColorDuplicated(sliceNumber, this.colorArray);
      const color = 'color' + colorSlide;
      if (slice > 0) {
        x += sides[slice - 1];
      }
      if (this.width > this.height) {
        if (totalSides && (slice === sliceNumber)) {
          realWidth = this.width;
          realHeight = this.height;
          realX = 0;
          realY = 0;
        } else {
          if (slice === sliceNumber - 1) {
            realWidth = this.width;
            realHeight = this.height;
            realX = 0;
            realY = x;
          } else {
            realWidth = this.getRandomInt(this.width);
            realHeight = width;
            realX = 0;
            realY = x;
          }
        }
      } else {
        if (totalSides && (slice === sliceNumber)) {
          realWidth = this.width;
          realHeight = this.height;
          realX = 0;
          realY = 0;
        } else {
          if (slice === sliceNumber - 1) {
            realWidth = width;
            realHeight = this.height;
            realX = x;
            realY = 0;
          } else {
            realWidth = width;
            realHeight = this.getRandomInt(this.height);
            realX = x;
            realY = 0;
          }
        }
      }
      this.firstPath = new Path.Rectangle({
        x: realX,
        y: realY,
        width: realWidth,
        height: realHeight,
        fillColor: colorPalettes[palettes][color],
        shadowColor: new Color(0, 0, 0),
        shadowBlur: 12,
        shadowOffset: new Point(4, 4)
      });
      if (totalSides && (slice === sliceNumber)) {
        this.project.activeLayer.addChild(this.firstPath).sendToBack();
      } else {
        this.project.activeLayer.addChild(this.firstPath);
      }
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

  download() {
     const fileName = 'custom.svg';
     const url = 'data:image/svg+xml;utf8,' + encodeURIComponent(this.project.exportSVG({asString: true}));
     const link = document.createElement('a');
     link.download = fileName;
     link.href = url;
     link.click();
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

}
