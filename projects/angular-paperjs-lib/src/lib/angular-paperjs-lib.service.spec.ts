import { TestBed } from '@angular/core/testing';

import { AngularPaperjsLibService } from './angular-paperjs-lib.service';

describe('AngularPaperjsLibService', () => {
  let service: AngularPaperjsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPaperjsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
