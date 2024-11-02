import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { appConfig } from './app/app.config';

// export const TaskServiceInjectionToken = new InjectionToken<TaskService>('task-service-token');

// bootstrapApplication(AppComponent, {
//   providers: [ {
//     provide: TaskServiceInjectionToken, useClass: TaskService
//   }]
// })
  // .catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
