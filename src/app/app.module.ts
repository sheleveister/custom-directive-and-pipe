import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundDirective } from './directives/background.directive';
import { AppPowPipe } from './pipes/app-pow.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    AppPowPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
