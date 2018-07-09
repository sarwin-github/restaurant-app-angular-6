import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPackageAllOccationsComponent } from './menu-package-all-occations.component';

describe('MenuPackageAllOccationsComponent', () => {
  let component: MenuPackageAllOccationsComponent;
  let fixture: ComponentFixture<MenuPackageAllOccationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPackageAllOccationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPackageAllOccationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
