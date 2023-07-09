import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PlantypeService {
  constructor() {}

  private isYearlyBS = new BehaviorSubject<boolean>(false);
  isYearly$ = this.isYearlyBS.asObservable();

  setPlanType(isYearly: boolean) {
    this.isYearlyBS.next(isYearly);
  }
}
