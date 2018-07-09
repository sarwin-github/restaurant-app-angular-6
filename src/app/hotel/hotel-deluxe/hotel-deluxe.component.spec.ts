import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDeluxeComponent } from './hotel-deluxe.component';

describe('HotelDeluxeComponent', () => {
  let component: HotelDeluxeComponent;
  let fixture: ComponentFixture<HotelDeluxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDeluxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDeluxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
