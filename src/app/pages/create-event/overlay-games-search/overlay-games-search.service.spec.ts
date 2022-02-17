import { TestBed } from '@angular/core/testing';

import { OverlayGamesSearchService } from './overlay-games-search.service';

describe('OverlayGamesSearchService', () => {
  let service: OverlayGamesSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayGamesSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
