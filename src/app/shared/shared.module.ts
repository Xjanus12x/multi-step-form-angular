import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { PickAddOnsComponent } from './components/pick-add-ons/pick-add-ons.component';
import { PaymentComponent } from './components/payment/payment.component';
import { InputComponent } from './components/input/input.component';
import { PlanComponent } from './components/plan/plan.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { AddOnComponent } from './components/add-on/add-on.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    NavigationComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    PickAddOnsComponent,
    PaymentComponent,
    InputComponent,
    PlanComponent,
    ToggleSwitchComponent,
    AddOnComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NavigationComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    PickAddOnsComponent,
    PaymentComponent,
    InputComponent,
    PlanComponent,
    ToggleSwitchComponent,
    AddOnComponent,
    MessageComponent,
  ],
})
export class SharedModule {}
