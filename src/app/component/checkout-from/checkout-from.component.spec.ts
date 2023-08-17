import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFromComponent } from './checkout-from.component';

describe('CheckoutFromComponent', () => {
  let component: CheckoutFromComponent;
  let fixture: ComponentFixture<CheckoutFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutFromComponent]
    });
    fixture = TestBed.createComponent(CheckoutFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
