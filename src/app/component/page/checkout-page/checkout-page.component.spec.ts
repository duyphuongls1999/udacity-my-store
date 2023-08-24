import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPageComponent } from './checkout-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckoutPageComponent', () => {
  let component: CheckoutPageComponent;
  let fixture: ComponentFixture<CheckoutPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [CheckoutPageComponent]
    });
    fixture = TestBed.createComponent(CheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
