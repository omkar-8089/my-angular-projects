// import { bootstrapApplication platformBrowser} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// 
// // import { HeaderComponent } from './app/header/header.component';

// // bootstrapApplication(AppComponent, appConfig)
// //   .catch((err) => console.error(err));

//   // bootstrapApplication(HeaderComponent, appConfig) // Not-recommended
//   // .catch((err) => console.error(err));


//   platformBrowserDynamic().bootstrapModule(AppModule,)


// platformBrowserDynamic().bootstrapModule(SharedModule,) //// Did for practice purpose to validate the behavior.

platformBrowserDynamic().bootstrapModule(AppModule,)