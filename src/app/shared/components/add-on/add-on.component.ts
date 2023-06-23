import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css'],
})
export class AddOnComponent {
  @Input() addOnName: string = '';
  @Input() addOnDescription: string = '';
  @Input() addOnPrice: number = 0;
  @Input() addOnLabel: string = '';
  @Input() isSelected: boolean = false;
  @Input() isYearly:boolean = false;
}
