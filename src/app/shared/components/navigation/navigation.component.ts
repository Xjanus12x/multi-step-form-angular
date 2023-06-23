import { Component, Output, EventEmitter } from '@angular/core';
import { ValidFormService } from 'src/app/services/valid-form.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  @Output() indexChange = new EventEmitter<number>();
  index: number = 0;
  isFormValid = false;
  handleButtonClick($event: any) {
    if (this.index === 4) return;
    if ($event.target.id === 'previous') {
      this.index--;
    } else if ($event.target.id === 'next') {
      if (!this.isFormValid) return;
      this.index++;
    }
    this.indexChange.emit(this.index);
  }
  constructor(private validFormService: ValidFormService) {
    this.validFormService.isFormValid$.subscribe((isValid) => {
      this.isFormValid = isValid;
    });
  }
}
