import { LibtestModule } from '@test/libtest';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibtestModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
