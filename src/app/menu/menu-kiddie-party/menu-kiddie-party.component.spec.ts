import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuKiddiePartyComponent } from './menu-kiddie-party.component';

describe('MenuKiddiePartyComponent', () => {
  let component: MenuKiddiePartyComponent;
  let fixture: ComponentFixture<MenuKiddiePartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuKiddiePartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuKiddiePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
