import { Injectable, signal } from '@angular/core';
import { IInvestmentResultFields, IUserInvestmentFields } from '../models/investment.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculationService {
  public calculatedInvestmentResults = signal<IInvestmentResultFields[]>([]);
  constructor() {}

  public calculateInvestmentResults(
    userInvestmentDetails: IUserInvestmentFields
  ) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      userInvestmentDetails;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.calculatedInvestmentResults.set(annualData);
    // return annualData;
  }
}
