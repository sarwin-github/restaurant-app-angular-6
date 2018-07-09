import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelStandardComponent } from './hotel-standard.component';

describe('HotelStandardComponent', () => {
  let component: HotelStandardComponent;
  let fixture: ComponentFixture<HotelStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
