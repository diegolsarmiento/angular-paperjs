import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaperScope, Project, Path, Layer } from 'paper';
import { canvasSize } from '../settings';

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

    this.path = new Path.Rectangle({
      x: 0,
      y: 0,
      width: 200,
      height: 1201,
      fillColor: '#272635'
    });

    // Create a new layer and activate it
    this.secondLayer = new Layer();

    // Sencod element
    this.secondPath = new Path.Rectangle({
      x: 200,
      y: 0,
      width: 400,
      height: 1201,
      fillColor: '#FF3F00'
    });

    // Create a new layer and activate it
    this.thirdLayer = new Layer();

    // Sencod element
    this.thirdPath = new Path.Rectangle({
      x: 600,
      y: 0,
      width: 101,
      height: 1201,
      fillColor: '#F0F0F0'
    });

    // Add child to layer
    this.project.activeLayer.addChild(this.currentPath);
  }

}
