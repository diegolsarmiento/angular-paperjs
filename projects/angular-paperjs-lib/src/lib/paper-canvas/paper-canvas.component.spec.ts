import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperCanvasComponent } from './paper-canvas.component';

describe('PaperCanvasComponent', () => {
  let component: PaperCanvasComponent;
  let fixture: ComponentFixture<PaperCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
