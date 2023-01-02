import { TestBed } from '@angular/core/testing';

import { NgxAppSharedService } from './ngx-app-shared.service';

describe('NgxAppSharedService', () => {
  let service: NgxAppSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAppSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
