import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { PaperScope, Project, Path, Color, Point, view } from 'paper';
import { colorPalettes } from '../settings';
import { AngularPaperjsLibService } from '../angular-paperjs-lib.service';

@Component({
  selector: 'plb-gradient-canvas',
  templateUrl: './gradient-canvas.component.html',
  styleUrls: ['./gradient-canvas.component.scss']
})
export class GradientCanvasComponent implements OnInit, AfterViewInit {

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
    this.addBackground();
  }

  addBackground(): void {
    const sliceNumber = 1 + this.functions.getRandomInt(5);
    const x = 0;
    const y = 0;
    const sides = [];
    const palettes = this.functions.randomPalette(colorPalettes);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    for (let slice = 0; slice <= sliceNumber; slice ++) {
      const width = this.width;
      const height = this.height;
      sides.push(width);

      const colorSlide1 =  this.functions.checkColorDuplicated(sliceNumber, this.colorArray);
      const colorSlide2 =  this.functions.checkColorDuplicated(sliceNumber + 1, this.colorArray);
      const colorSlide3 =  this.functions.checkColorDuplicated(sliceNumber + 2, this.colorArray);

      const color1 = 'color' + colorSlide1;
      const color2 = 'color' + colorSlide2;
      const color3 = 'color' + colorSlide3;

      const center =  new Point( (width / 2) , (height / 2));
      const bottomCenter = new Point( (width / 2) , height);

      this.firstPath = new Path.Rectangle({
        x,
        y,
        width,
        height,
        fillColor: {
          gradient: {
              stops: [colorPalettes[palettes][color1], colorPalettes[palettes][color2], colorPalettes[palettes][color3]]
          },
          origin: center,
          destination: bottomCenter
        },
        // blendMode: 'multiply'
      });
      this.project.activeLayer.addChild(this.firstPath);
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
