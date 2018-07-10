import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesMainComponent } from './facilities-main.component';

describe('FacilitiesMainComponent', () => {
  let component: FacilitiesMainComponent;
  let fixture: ComponentFixture<FacilitiesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
