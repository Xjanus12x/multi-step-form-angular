import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ChangePlanService {
  constructor() {}
  private isChangePlanBS = new BehaviorSubject<boolean>(false);
  isChangePlan$ = this.isChangePlanBS.asObservable();

  setIsChangePlan(isChangePlan: boolean): void {
    this.isChangePlanBS.next(isChangePlan);
  }
 
}
