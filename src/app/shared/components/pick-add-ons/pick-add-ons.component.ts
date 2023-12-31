import { Component, Input } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { PlantypeService } from 'src/app/services/plantype.service';
@Component({
  selector: 'app-pick-add-ons',
  templateUrl: './pick-add-ons.component.html',
  styleUrls: ['./pick-add-ons.component.css'],
})
export class PickAddOnsComponent {
  constructor(
    private paymentService: PaymentService,
    private planTypeService: PlantypeService
  ) {
    this.planTypeService.isYearly$.subscribe((planType: boolean) => {
      this.isYearly = planType;
    });
  }
  addOns = [
    {
      label: 'Online service add-on',
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: [1, 10],
      isActive: false,
    },
    {
      label: 'Larger storage add-on',
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: [2, 20],
      isActive: false,
    },
    {
      label: 'Customizable profile add-on',
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: [2, 20],
      isActive: false,
    },
  ];
  isYearly!: boolean;
  handlePriceChange(addOnPrices: any, planType: boolean): number {
    return planType ? addOnPrices[1] : addOnPrices[0];
  }
  handleMouseEvents(index: number): void {
    this.addOns[index].isActive = !this.addOns[index].isActive;
  }
  handleKeyboardEvents(index: number): void {
    this.addOns[index].isActive = !this.addOns[index].isActive;
  }
  ngDoCheck(): void {
    this.paymentService.setSelectedAddOns(this.addOns);
  }
}
