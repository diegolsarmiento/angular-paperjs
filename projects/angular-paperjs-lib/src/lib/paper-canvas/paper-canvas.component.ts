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
  secondPath: any;
  thirdPath: any;

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
    // First element
    const slides = this.slideSizes();
    const colors = this.randomPalette(colorPalettes);
    const color0 = 'color0';
    const color1 = 'color1';
    const color2 = 'color2';

    this.firstPath = new Path.Rectangle({
      x: 0,
      y: 0,
      width: slides[0],
      height: 1201,
      fillColor: colorPalettes[colors][color0],
      blendMode: 'multiply'
    });

    // Second element
    this.secondPath = new Path.Rectangle({
      x: slides[0],
      y: 0,
      width: slides[1],
      height: 1201,
      fillColor: colorPalettes[colors][color1],
      blendMode: 'multiply'
    });

    // Third element
    const thirdWidth = slides[0] + slides[1];
    this.thirdPath = new Path.Rectangle({
      x: thirdWidth,
      y: 0,
      width: slides[2],
      height: 1201,
      fillColor: colorPalettes[colors][color2],
      blendMode: 'multiply'
    });

    // Add child to layer
    this.project.activeLayer.addChild(this.firstPath);
    this.project.activeLayer.addChild(this.secondPath);
    this.project.activeLayer.addChild(this.thirdPath);
  }

  slideSizes(): number[] {
    const total = 701;
    const sideA = this.randomNumber(50, 150);
    const sideB = this.randomNumber(150, 400);
    const sideC = total - sideA - sideB;
    return [sideA, sideB, sideC];
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
