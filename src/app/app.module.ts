import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './store/effects/core.effects';
//import { reducers, metaReducers } from './store/reducers';

@NgModule({
  declarations: [AppComponent, NoPageFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    /*StoreModule.forRoot(reducers, {
      metaReducers
    })*/
    StoreModule.forRoot(appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    EffectsModule.forRoot([SharedEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
