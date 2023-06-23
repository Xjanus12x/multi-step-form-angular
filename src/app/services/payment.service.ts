import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private planNameBS = new BehaviorSubject<string>('');
  private planCostBS = new BehaviorSubject<number>(0);
  private addOnsBS = new BehaviorSubject<Array<any>>([]);


  selectedPlanName$ = this.planNameBS.asObservable();
  selectedPlanCost$ = this.planCostBS.asObservable();
  selectedAddOns$ = this.addOnsBS.asObservable();


  setPlanName(planName: string): void {
    this.planNameBS.next(planName);
  }
  setPlanCost(planCost: number): void {
    this.planCostBS.next(planCost);
  }
  setSelectedAddOns(addOns: Array<object>): void {
    this.addOnsBS.next(addOns);
  }

}
