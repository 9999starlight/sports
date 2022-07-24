import { TestBed } from '@angular/core/testing';

import { SportGroupListResolver } from './sport-group-list.resolver';

describe('SportGroupListResolver', () => {
  let resolver: SportGroupListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SportGroupListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
