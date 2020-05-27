import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientCanvasComponent } from './gradient-canvas.component';

describe('GradientCanvasComponent', () => {
  let component: GradientCanvasComponent;
  let fixture: ComponentFixture<GradientCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
