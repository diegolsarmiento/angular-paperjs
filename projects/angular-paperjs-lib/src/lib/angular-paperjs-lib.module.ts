import { NgModule } from '@angular/core';
import { AngularPaperjsLibComponent } from './angular-paperjs-lib.component';
import { PaperCanvasComponent } from './paper-canvas/paper-canvas.component';

@NgModule({
  declarations: [AngularPaperjsLibComponent, PaperCanvasComponent],
  imports: [
  ],
  exports: [AngularPaperjsLibComponent, PaperCanvasComponent]
})
export class AngularPaperjsLibModule { }
