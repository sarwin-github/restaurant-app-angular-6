import { TestBed, inject } from '@angular/core/testing';

import { MenuDataService } from './menu-data.service';

describe('MenuDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuDataService]
    });
  });

  it('should be created', inject([MenuDataService], (service: MenuDataService) => {
    expect(service).toBeTruthy();
  }));
});
