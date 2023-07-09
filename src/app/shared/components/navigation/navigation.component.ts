import { Component, Output, EventEmitter } from '@angular/core';
import { ChangePlanService } from 'src/app/services/change-plan.service';
import { ValidFormService } from 'src/app/services/valid-form.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  @Output() indexChange = new EventEmitter<number>();

  index: number = 0;
  isFormValid: boolean = false;
  isChangePlan: boolean = false;
  constructor(
    private validFormService: ValidFormService,
    private changePlanService: ChangePlanService
  ) {
    this.validFormService.isFormValid$.subscribe((isValid) => {
      this.isFormValid = isValid;
    });
    this.changePlanService.isChangePlan$.subscribe((isChangePlan) => {
      this.isChangePlan = isChangePlan;
    });
  }
  handleButtonClick($event: any): void {
    if (this.index === 4) return;

    // To make sure that only prev and next button will trigger the event emiter
    if ($event.target.id === 'previous' || $event.target.id === 'next') {
      if ($event.target.id === 'previous') {
        this.index--;
      } else if ($event.target.id === 'next') {
        if (!this.isFormValid) return;
        this.index++;
      }
      this.indexChange.emit(this.index);
    }
  }
  ngDoCheck() {
    if (this.isChangePlan) {
      this.index = 1;
      this.changePlanService.setIsChangePlan(false);
      this.indexChange.emit(this.index);
    }
  }
}
