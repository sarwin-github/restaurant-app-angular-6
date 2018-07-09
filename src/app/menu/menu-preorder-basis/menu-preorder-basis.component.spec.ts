import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPreorderBasisComponent } from './menu-preorder-basis.component';

describe('MenuPreorderBasisComponent', () => {
  let component: MenuPreorderBasisComponent;
  let fixture: ComponentFixture<MenuPreorderBasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPreorderBasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPreorderBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
