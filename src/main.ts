import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NgrxIntroAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgrxIntroAppComponent);

