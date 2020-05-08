import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaperScope, Project, Path, Point } from 'paper';
import { canvasSize } from '../settings';

@Component({
  selector: 'plb-paper-canvas',
  templateUrl: './paper-canvas.component.html',
  styleUrls: ['./paper-canvas.component.scss']
})
export class PaperCanvasComponent implements OnInit {

  @ViewChild('canvasElement') canvasElement: ElementRef;
  height: string;
  width: string;
  scope: any;
  project: any;

  constructor() { }

  ngOnInit(): void {
    this.height = canvasSize.height;
    this.width = canvasSize.width;
    this.scope = new PaperScope();
    this.project = new Project(this.canvasElement.nativeElement);
  }

}
