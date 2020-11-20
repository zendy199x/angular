import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormatAddressPipe } from './format-address.pipe';
import { AdultPipe } from './adult.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FormatAddressPipe, AdultPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
