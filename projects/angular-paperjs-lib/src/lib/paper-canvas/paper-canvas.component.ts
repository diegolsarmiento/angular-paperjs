import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PaperScope, Project, Path, Color, Point } from 'paper';
import { colorPalettes } from '../settings';
import { AngularPaperjsLibService } from '../angular-paperjs-lib.service';

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

  constructor(private functions: AngularPaperjsLibService) { }

  ngOnInit(): void {
    /* Basic config */
    this.height = this.availableHeight;
    this.width = this.availableWidth;
    this.scope = new PaperScope();
  }

  ngAfterViewInit(): void {
    this.project = new Project(this.canvasElement.nativeElement);
    this.addElements();
    this.addElements();
  }

  addElements() {
    let realWidth;
    let realHeight;
    let realX;
    let realY;
    const sliceNumber = this.functions.randomNumber(3, 9);
    let x = 0;
    const sides = [];
    let totalSides;
    const palettes = this.functions.randomPalette(colorPalettes);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let slice = 0; slice <= sliceNumber; slice ++) {
      const initNumber = this.functions.randomNumber(20, 40);
      const lastNumber = this.functions.randomNumber(60, 120);
      let width = this.functions.randomNumber(initNumber, lastNumber);
      if (totalSides && (slice === sliceNumber - 1)) {
        if (this.width > this.height) {
          width = this.height - totalSides;
        } else {
          width = this.width - totalSides;
        }
      }
      sides.push(width);
      totalSides = sides.reduce(reducer);
      const colorSlide =  this.functions.checkColorDuplicated(sliceNumber, this.colorArray);
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
            realWidth = this.functions.getRandomInt(this.width);
            realHeight = width;
            realX = 0;
            realY = x;
          }
        }
      } else {
        if (totalSides && (slice === sliceNumber)) {
          realWidth = this.width;
          realHeight = this.height;
          realX = -300;
          realY = -400;
        } else {
          if (slice === sliceNumber - 1) {
            realWidth = width * 2;
            realHeight = this.height * 2;
            realX = -150;
            realY = -150;
          } else {
            realWidth = width;
            realHeight = this.functions.getRandomInt(this.height);
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
      this.firstPath.rotate(45);
      const scale = this.functions.randomNumber(0.8, 1.6);
      this.firstPath.scale(scale);
      if (totalSides && (slice === sliceNumber)) {
        this.project.activeLayer.addChild(this.firstPath).sendToBack();
      } else {
        this.project.activeLayer.addChild(this.firstPath);
      }
    }
  }

  download() {
    const fileName = 'custom.svg';
    const url = 'data:image/svg+xml;utf8,' + encodeURIComponent(this.project.exportSVG({asString: true}));
    const link = document.createElement('a');
    link.download = fileName;
    link.href = url;
    link.click();
 }

}
