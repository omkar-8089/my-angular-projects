import { Component, computed } from '@angular/core';
import { InvestmentCalculationService } from '../../core/investment-calculation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
public investmentResults = computed(() => {
  return this.investmentCalculationService.calculatedInvestmentResults()
})
/*
  alternative way

  this.investmentResults = this.investmentCalculationService.asReadonly

*/

constructor(private readonly  investmentCalculationService: InvestmentCalculationService) {
}


}
