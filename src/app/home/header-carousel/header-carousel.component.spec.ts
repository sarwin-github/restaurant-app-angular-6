import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCarouselComponent } from './header-carousel.component';

describe('HeaderCarouselComponent', () => {
  let component: HeaderCarouselComponent;
  let fixture: ComponentFixture<HeaderCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
