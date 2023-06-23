import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ValidFormService {
  constructor() {}

  private isFormValidBS = new BehaviorSubject<boolean>(false);
  isFormValid$ = this.isFormValidBS.asObservable();

  setIsFormValid(isValid: boolean) {
    this.isFormValidBS.next(isValid);
  }
}
