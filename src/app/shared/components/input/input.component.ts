import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidFormService } from 'src/app/services/valid-form.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() control = new FormControl();
  @Input() inputId: String = '';
  @Input() label: String = '';
  @Input() inputPlaceHolder: String = '';
  @Input() inputType: String = '';
  errorMessages: Record<string, string> = {
    required: 'This field is required',
    email: 'The email is invalid',
  };
  isFormValid = false;
  constructor(private validFormService: ValidFormService) {
    this.validFormService.isFormValid$.subscribe((isValid) => {
      this.isFormValid = isValid
    });
  }
}
