import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundDirective } from './directives/background.directive';
import { AppPowPipe } from './pipes/app-pow.pipe';
import { CarListComponent } from './car-list/car-list.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    AppPowPipe,
    CarListComponent,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
