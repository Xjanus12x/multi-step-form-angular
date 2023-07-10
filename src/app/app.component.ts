import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { ChangePlanService } from './services/change-plan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
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

  isChangePlan: boolean = false;
  currentIndex: number = 0;
  constructor(
    private changePlanService: ChangePlanService,
    private renderer: Renderer2
  ) {
    this.changePlanService.isChangePlan$.subscribe((isChangePlan) => {
      this.isChangePlan = isChangePlan;
    });
  }
  @ViewChildren('formStep') childElements!: QueryList<ElementRef>;
  formSteps!: ElementRef[];
  ngAfterViewInit() {
    this.formSteps = this.childElements.toArray();
  }

  handleIndexChange(index: number): void {
    const previousIndex = this.currentIndex;
    this.currentIndex = index;
    const previousStep = this.formSteps[previousIndex].nativeElement;
    const currentStep = this.formSteps[this.currentIndex].nativeElement;
    if (previousStep) {
      this.renderer.addClass(previousStep, 'hidden');
      this.renderer.removeClass(previousStep, 'fadeIn');
    }
    if (currentStep) {
      this.renderer.removeClass(currentStep, 'hidden');
      this.renderer.addClass(currentStep, 'fadeIn');
    }
  }
}
