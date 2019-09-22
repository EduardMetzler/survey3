import { TestBed } from '@angular/core/testing';

import { NewListService } from './new-list.service';

describe('NewListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewListService = TestBed.get(NewListService);
    expect(service).toBeTruthy();
  });
});
