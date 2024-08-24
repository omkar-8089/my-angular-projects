import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { InvestmentResultsComponent } from "./components/investment-results/investment-results.component";
import { UserInputComponent } from "./components/user-input/user-input.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, HeaderComponent,  InvestmentResultsComponent, UserInputComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule]
})

export class AppModule {

}