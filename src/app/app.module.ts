import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClasseDirective } from './classe.directive';
import { TimeDirective } from './time.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClasseDirective,
    TimeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
