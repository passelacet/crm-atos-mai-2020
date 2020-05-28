import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAddOrderComponent } from './pages-add-order.component';

describe('PagesAddOrderComponent', () => {
  let component: PagesAddOrderComponent;
  let fixture: ComponentFixture<PagesAddOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesAddOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesAddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
