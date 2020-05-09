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
  currentPath: any;
  path: any;
  secondLayer: any;
  secondPath: any;
  thirdLayer: any;
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
    this.currentPath = new Path();
    const slides = this.slideSizes();
    const colors = this.randomPalette();
    const color0 = 'color0';
    const color1 = 'color1';
    const color2 = 'color2';

    this.path = new Path.Rectangle({
      x: 0,
      y: 0,
      width: slides[0],
      height: 1201,
      fillColor: colors[color0]
    });

    // Create a new layer and activate it
    this.secondLayer = new Layer();

    // Sencod element
    this.secondPath = new Path.Rectangle({
      x: 200,
      y: 0,
      width: slides[1],
      height: 1201,
      fillColor: colors[color1]
    });

    // Create a new layer and activate it
    this.thirdLayer = new Layer();

    // Sencod element
    this.thirdPath = new Path.Rectangle({
      x: 600,
      y: 0,
      width: slides[2],
      height: 1201,
      fillColor: colors[color2]
    });

    // Add child to layer
    this.project.activeLayer.addChild(this.currentPath);
  }

  slideSizes(): number[] {
    const total = 701;
    const sideA = this.randomNumber(50, 200);
    const sideB = this.randomNumber(200, 400);
    const sideC = total - sideA - sideB;
    return [sideA, sideB, sideC];
  }

  randomNumber(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  randomPalette(): any {
    const numberKeys = Object.keys(colorPalettes).length - 1;
    const set = this.getRandomInt(numberKeys);
    return Object.keys(colorPalettes)[set];
  }

}
