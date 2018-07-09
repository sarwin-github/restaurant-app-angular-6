import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesAllComponent } from './packages-all.component';

describe('PackagesAllComponent', () => {
  let component: PackagesAllComponent;
  let fixture: ComponentFixture<PackagesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
