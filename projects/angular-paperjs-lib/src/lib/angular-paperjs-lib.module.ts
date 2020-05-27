import { NgModule } from '@angular/core';
import { AngularPaperjsLibComponent } from './angular-paperjs-lib.component';
import { PaperCanvasComponent } from './paper-canvas/paper-canvas.component';
import { GradientCanvasComponent } from './gradient-canvas/gradient-canvas.component';

@NgModule({
  declarations: [AngularPaperjsLibComponent, PaperCanvasComponent, GradientCanvasComponent ],
  imports: [
  ],
  exports: [AngularPaperjsLibComponent, PaperCanvasComponent, GradientCanvasComponent ]
})
export class AngularPaperjsLibModule { }
