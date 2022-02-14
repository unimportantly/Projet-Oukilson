import { TestBed } from '@angular/core/testing';

import { ProfilPreviewService } from './profil-preview.service';

describe('ProfilPreviewService', () => {
  let service: ProfilPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
