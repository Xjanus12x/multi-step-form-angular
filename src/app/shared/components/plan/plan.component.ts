import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent {
  @Input() planImg: string = '';
  @Input() planName: string = '';
  @Input() planPrice: number = 0;
  @Input() isActive: boolean = false;
  @Input() isYearly: boolean = false;
  @Input() planLabel: string = '';
}
