import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  createForm!: FormGroup;
  submitted = false;
  numberRegEx = /^\d+$/;
  @Output() userInfo = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      creditCard: ['', [Validators.required, Validators.pattern(this.numberRegEx), Validators.minLength(8)]],
    });
  }
  onSubmit() {
    console.log(this.createForm);
    if (this.createForm.valid) {
      this.userInfo.emit(this.createForm.value);
    } else {
      this.validateAllFormFields(this.createForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  get fullName() {
    return this.createForm.get('fullName');
  }
  get address() {
    return this.createForm.get('address');
  }
  get creditCard() {
    return this.createForm.get('creditCard');
  }
}
