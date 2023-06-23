import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'multi-step-form-angular';

  indicatorsContent = [
    {
      stepNumber: 1,
      stepLabel: 'STEP 1',
      stepTitle: 'YOUR INFO',
      isActive: true,
    },
    {
      stepNumber: 2,
      stepLabel: 'STEP 2',
      stepTitle: 'SELECT PLAN',
      isActive: false,
    },
    {
      stepNumber: 3,
      stepLabel: 'STEP 3',
      stepTitle: 'ADD-ONS',
      isActive: false,
    },
    {
      stepNumber: 4,
      stepLabel: 'STEP 4',
      stepTitle: 'SUMMARY',
      isActive: false,
    },
  ];
  isYearly: boolean = false;

  handleIsYearlyChange($event: boolean) {
    this.isYearly = $event;
  }

  currentIndex: number = 0;
  index: number = 0;
  handleIndexChange(index: number): void {
    const previousIndex = this.currentIndex;
    this.currentIndex = index;

    // Add or remove the "hidden" class for animation
    const previousElement = document.getElementById(`step-${previousIndex}`);
    const currentElement = document.getElementById(`step-${this.currentIndex}`);

    if (previousElement) {
      previousElement.classList.add('hidden');
      previousElement.classList.remove('fadeIn');
    }
    if (currentElement) {
      currentElement.classList.remove('hidden');

      currentElement.classList.add('fadeIn');
    }
  }
}
