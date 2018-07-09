import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelVillaComponent } from './hotel-villa.component';

describe('HotelVillaComponent', () => {
  let component: HotelVillaComponent;
  let fixture: ComponentFixture<HotelVillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelVillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
