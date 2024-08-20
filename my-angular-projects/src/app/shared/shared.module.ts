import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    // bootstrap: [CardComponent],
    // imports: [BrowserModule]
})

export class SharedModule {}