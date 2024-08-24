export interface IUserInvestmentFields {
    initialInvestment: number;
    annualInvestment:  number;
    expectedReturn: number;
    duration: number;
}

export interface IInvestmentResultFields {
    year: number
    interest: number
    valueEndOfYear: number
    annualInvestment: number
    totalInterest: number
    totalAmountInvested: number
}