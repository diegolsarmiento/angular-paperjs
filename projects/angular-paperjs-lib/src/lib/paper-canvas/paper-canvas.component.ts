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
    // Create a circle shaped path
    this.currentPath = new Path();
    this.path = new Path.Circle({
      center: [80, 50],
      radius: 35,
      fillColor: 'red'
    });

    // Create a new layer and activate it
    this.secondLayer = new Layer();

    // Second path is added as a child of the second layer
    this.secondPath = new Path.Circle({
      center: [120, 50],
      radius: 35,
      fillColor: '#00FF00'
    });

    // Add child to layer
    this.project.activeLayer.addChild(this.currentPath);
  }

}
