import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPaperjsLibComponent } from './angular-paperjs-lib.component';

describe('AngularPaperjsLibComponent', () => {
  let component: AngularPaperjsLibComponent;
  let fixture: ComponentFixture<AngularPaperjsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPaperjsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPaperjsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
