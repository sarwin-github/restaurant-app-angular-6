import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCarouselComponent } from './hotel-carousel.component';

describe('HotelCarouselComponent', () => {
  let component: HotelCarouselComponent;
  let fixture: ComponentFixture<HotelCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
