import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

registerLicense("Mgo+DSMBMAY9C3t2VVhiQlFaclxJVHxBYVF2R2FJd1RwcV9GYUwgOX1dQl9hSXZRdUVhWntbdX1WRmI=");

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
