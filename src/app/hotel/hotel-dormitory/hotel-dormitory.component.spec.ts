import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDormitoryComponent } from './hotel-dormitory.component';

describe('HotelDormitoryComponent', () => {
  let component: HotelDormitoryComponent;
  let fixture: ComponentFixture<HotelDormitoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDormitoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDormitoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
