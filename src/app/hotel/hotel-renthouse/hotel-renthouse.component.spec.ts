import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRenthouseComponent } from './hotel-renthouse.component';

describe('HotelRenthouseComponent', () => {
  let component: HotelRenthouseComponent;
  let fixture: ComponentFixture<HotelRenthouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRenthouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRenthouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
