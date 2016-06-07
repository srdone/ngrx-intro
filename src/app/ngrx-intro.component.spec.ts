import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgrxIntroAppComponent } from '../app/ngrx-intro.component';

beforeEachProviders(() => [NgrxIntroAppComponent]);

describe('App: NgrxIntro', () => {
  it('should create the app',
      inject([NgrxIntroAppComponent], (app: NgrxIntroAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ngrx-intro works!\'',
      inject([NgrxIntroAppComponent], (app: NgrxIntroAppComponent) => {
    expect(app.title).toEqual('ngrx-intro works!');
  }));
});
