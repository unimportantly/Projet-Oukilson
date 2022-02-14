import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayGamesSearchComponent } from './overlay-games-search.component';

describe('OverlayGamesSearchComponent', () => {
  let component: OverlayGamesSearchComponent;
  let fixture: ComponentFixture<OverlayGamesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayGamesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayGamesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
