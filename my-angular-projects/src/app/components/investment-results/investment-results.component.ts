import { Component, computed } from '@angular/core';
import { InvestmentCalculationService } from '../../core/investment-calculation.service';

@Component({
  selector: 'app-investment-results',
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
