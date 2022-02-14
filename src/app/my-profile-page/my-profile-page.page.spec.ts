import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilePagePage } from './my-profile-page.page';

describe('MyProfilePagePage', () => {
  let component: MyProfilePagePage;
  let fixture: ComponentFixture<MyProfilePagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfilePagePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
