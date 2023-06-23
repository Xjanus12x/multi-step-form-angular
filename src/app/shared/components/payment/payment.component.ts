import { Component, Input } from '@angular/core';
import { filter, map } from 'rxjs';
import { PaymentService } from 'src/app/services/payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  @Input() isYearly: boolean = false;
  selectedPlanName: string = '';
  selectedPlanCost: number = 0;
  selectedAddOns: Array<any> = [];

  constructor(private paymentService: PaymentService) {
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
