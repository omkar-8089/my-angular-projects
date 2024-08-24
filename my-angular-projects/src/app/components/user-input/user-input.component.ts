import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserInvestmentFields } from '../../models/investment-model';
import { InvestmentCalculationService } from '../../core/investment-calculation.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  userInvestmentDetails: WritableSignal<IUserInvestmentFields> = signal({
    annualInvestment: 0,
    duration: 10,
    expectedReturn: 5,
    initialInvestment: 0
  });

  constructor(private readonly investmentCalculationService: InvestmentCalculationService) { }

  onCalculate() {
    this.investmentCalculationService.calculateInvestmentResults(this.userInvestmentDetails());
    this.userInvestmentDetails.set({
      annualInvestment: 0,
      duration: 0,
      expectedReturn: 5,
      initialInvestment: 10
    })
  }
}
