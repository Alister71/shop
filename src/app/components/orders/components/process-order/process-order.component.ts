import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from '../../../../shared/models/user.model';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  AbstractControl,
  Validators, FormArray
} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy  {
  user: UserModel = new UserModel('',
    'Consumer',
    'some.consumery@gmail.com',
    '1111111',
    false,
    '');
// form model
  userForm: FormGroup;
  private sub: Subscription;

  placeholder = {
    address: 'Address',
  };

  validationMessagesMap = new Map([
    ['firstName', {
      message: '', // <== сформированное сообщение для пользователя
      required: 'Please enter your first name.',
      pattern: 'Please enter valid your first name.'
    }],
    ['lastName', {
      message: '',
      required: 'Please enter your last name.'
    }],
    ['email', {
      message: '',
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.',
      email: 'Please enter a valid email address.',
      asyncEmailInvalid:
        'This email already exists. Please enter other email address.'
    }],
    ['phone', {
      message: '',
      required: 'Please enter your phone number.'
    }],
    ['sendProducts', {
      message: ''
    }],
    ['address', {
      message: '',
      required: 'Please enter your address.'
    }],
  ]);

  constructor(private fb: FormBuilder) { }

  private buildForm(): void {
    this.userForm = this.fb.group({
      firstName: new FormControl('', {validators: [Validators.required, Validators.pattern('[A-Z][a-z]+')], updateOn: 'blur'}),
      lastName: '',
      email: ['',
          [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]
      ],
      phones: this.fb.array([this.buildPhone()]),
      sendProducts: false,
      addresses: this.fb.array([this.buildAddress()])
    });
  }

  private buildPhone(): FormGroup {
    return this.fb.group({
      phone: ''
    });
  }

  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onRemovePhone(index: number): void {
    this.phones.removeAt(index);
  }

  private buildAddress(): FormGroup {
    return this.fb.group({
      address: ''
    });
  }

  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  onAddAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  onRemoveAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  ngOnInit(): void {
    this.buildForm();
    this.watchValueChanges();
    this.setValidationMessages();
  }

  isShowValidationMessage(controlName: string): boolean {
    return this.validationMessagesMap.get(controlName).message && this[controlName].touched;
  }

  private buildValidationMessages(controlName: string): void {
    const c: AbstractControl = this[controlName]; // вызов гетера
    this.validationMessagesMap.get(controlName).message = '';
    if (c.errors) {
      this.validationMessagesMap.get(controlName).message = Object.keys(c.errors)
        .map(key => this.validationMessagesMap.get(controlName)[key])
        .join(' ');
    }
  }

  private setValidationMessages(): void {
    this.validationMessagesMap.forEach((control, cntrlName) => {
      this.buildValidationMessages(cntrlName);
    });
  }

  private watchValueChanges(): void {
    this.sub = this.sendProducts.valueChanges.subscribe(value => this.setSendProducts(value));
    const sub = this.userForm.valueChanges.subscribe(ignorValue =>
      this.setValidationMessages()
    );
    this.sub.add(sub);
  }

  private setSendProducts(sendProducts: boolean): void {
    const controls = new Map();
    controls.set('addressControl', this.address);
    if (sendProducts === true) {
      controls.get('addressControl').setValidators(Validators.required);
      this.placeholder = {
        address: 'Address (required)',
      };
    } else {
      controls.get('addressControl').clearValidators();
      this.placeholder = {
        address: 'Address',
      };
    }
    controls.forEach(control => control.updateValueAndValidity());
  }

  onSave(): void {
    this.user = new UserModel(this.firstName.value,
      this.lastName.value,
      this.email.value,
      this.phone.value,
      this.sendProducts.value,
      this.address.value);
  }

  get sendProducts(): AbstractControl {
    return this.userForm.get('sendProducts');
  }
  get firstName(): AbstractControl {
    return this.userForm.get('firstName');
  }
  get lastName(): AbstractControl {
    return this.userForm.get('lastName');
  }
  get email(): AbstractControl {
    return this.userForm.get('email');
  }
  get phone(): AbstractControl {
    return this.userForm.get('phone');
  }
  get address(): AbstractControl {
    return this.userForm.get('address');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
