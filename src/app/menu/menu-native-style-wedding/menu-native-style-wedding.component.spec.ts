import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNativeStyleWeddingComponent } from './menu-native-style-wedding.component';

describe('MenuNativeStyleWeddingComponent', () => {
  let component: MenuNativeStyleWeddingComponent;
  let fixture: ComponentFixture<MenuNativeStyleWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNativeStyleWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNativeStyleWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
