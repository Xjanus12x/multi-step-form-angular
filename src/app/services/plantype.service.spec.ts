import { TestBed } from '@angular/core/testing';

import { PlantypeService } from './plantype.service';

describe('PlantypeService', () => {
  let service: PlantypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
