import { Component } from '@angular/core';
import { map } from 'rxjs';
import { PaymentService } from 'src/app/services/payment.service';
import { ChangePlanService } from 'src/app/services/change-plan.service';
import { PlantypeService } from 'src/app/services/plantype.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  isYearly!: boolean;
  selectedPlanName: string = '';
  selectedPlanCost: number = 0;
  selectedAddOns: Array<any> = [];
  constructor(
    private paymentService: PaymentService,
    private changePlanService: ChangePlanService,
    private planTypeService: PlantypeService
  ) {
    this.planTypeService.isYearly$.subscribe((planType) => {
      this.isYearly = planType;
    });
    this.paymentService.selectedPlanName$.subscribe((planName) => {
      this.selectedPlanName = planName;
    });
    this.paymentService.selectedPlanCost$.subscribe((planCost) => {
      this.selectedPlanCost = planCost;
    });

    this.paymentService.selectedAddOns$
      .pipe(
        map((addOns) => {
          return addOns.filter((addOn) => addOn.isActive);
        })
      )
      .subscribe((filteredAddOns) => {
        this.selectedAddOns = filteredAddOns;
      });
  }
  changePlan() {
    this.changePlanService.setIsChangePlan(true);
  }
  getBillingType(): string {
    return this.isYearly ? 'yr' : 'mo';
  }
  getTotalPayment() {
    let totalAddOnsCost: number = 0;
    this.selectedAddOns.forEach((addOn) => {
      if (addOn.isActive) {
        totalAddOnsCost += this.isYearly ? addOn.price[1] : addOn.price[0];
      }
    });
    return totalAddOnsCost + this.selectedPlanCost;
  }
}
