import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { PlantypeService } from 'src/app/services/plantype.service';
@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
})
export class SelectPlanComponent {
  constructor(
    private paymentService: PaymentService,
    private planTypeService: PlantypeService
  ) {}
  plans = [
    {
      planLabel: 'Arcade plan',
      planImg: '../../../../assets/images/icon-arcade.svg',
      planName: 'Arcade',
      planCosts: [9, 90],
      isActive: true,
    },
    {
      planLabel: 'Advance plan',
      planImg: '../../../../assets/images/icon-advanced.svg',
      planName: 'Advanced',

      planCosts: [12, 120],
      isActive: false,
    },
    {
      planLabel: 'Pro plan',
      planImg: '../../../../assets/images/icon-pro.svg',
      planName: 'Pro',
      planCosts: [15, 150],
      isActive: false,
    },
  ];

  isYearly: boolean = false;

  handleMouseEvent(event: MouseEvent, index: number): void {
    this.plans.forEach((plan, i) => {
      plan.isActive = i === index;
    });
  }

  handleKeyboardEvent(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter') {
      this.plans.forEach((plan, i) => {
        plan.isActive = i === index;
      });
    }
  }

  handleIsYearlyChange($event: any) {
    this.isYearly = $event;
    this.planTypeService.setPlanType($event);
  }

  handlePriceChange(planPrices: any, planType: boolean): number {
    return planType ? planPrices[1] : planPrices[0];
  }
  ngDoCheck(): void {
    this.plans.forEach((plan) => {
      if (plan.isActive) {
        this.paymentService.setPlanName(plan.planName);
        this.paymentService.setPlanCost(
          this.isYearly ? plan.planCosts[1] : plan.planCosts[0]
        );
      }
    });
  }
}
