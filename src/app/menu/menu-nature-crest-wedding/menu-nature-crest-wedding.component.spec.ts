import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNatureCrestWeddingComponent } from './menu-nature-crest-wedding.component';

describe('MenuNatureCrestWeddingComponent', () => {
  let component: MenuNatureCrestWeddingComponent;
  let fixture: ComponentFixture<MenuNatureCrestWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNatureCrestWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNatureCrestWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
