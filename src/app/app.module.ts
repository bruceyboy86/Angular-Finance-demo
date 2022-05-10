import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { QuoteComponent } from './components/quote/quote.component';
import { CandlesComponent } from './components/candles/candles.component';

@NgModule({
  declarations: [AppComponent, MainComponent, ProfileComponent, QuoteComponent, CandlesComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
