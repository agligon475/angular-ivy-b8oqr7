import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FontAwesomeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ FaIconComponent ],
})
export class AppModule { }
