import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";;
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [ AppComponent , HeaderComponent, UserComponent],
    imports: [BrowserModule, TasksModule, SharedModule],
    bootstrap: [AppComponent ]
})

export class  AppModule {}