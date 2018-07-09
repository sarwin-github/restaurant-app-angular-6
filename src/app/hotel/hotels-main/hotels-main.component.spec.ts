import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsMainComponent } from './hotels-main.component';

describe('HotelsMainComponent', () => {
  let component: HotelsMainComponent;
  let fixture: ComponentFixture<HotelsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
