import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css'],
})
export class ToggleSwitchComponent {
  isYearly: boolean = false;

  @Output() isYearlyChange= new EventEmitter<boolean>();


  toggleIsYearly() {
    this.isYearly = !this.isYearly;
    this.isYearlyChange.emit(this.isYearly);
  }

  
}
