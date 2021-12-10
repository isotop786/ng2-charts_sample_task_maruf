import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EbookRoyaltyComponent } from './charts/ebook-royalty/ebook-royalty.component';
import { PaperbackRoyaltyComponent } from './charts/paperback-royalty/paperback-royalty.component';
import { AdSpendComponent } from './ad-spend/ad-spend.component';
import { AdImpressionsComponent } from './ad-impressions/ad-impressions.component';
import { AdClicksComponent } from './ad-clicks/ad-clicks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EbookRoyaltyComponent,
    PaperbackRoyaltyComponent,
    AdSpendComponent,
    AdImpressionsComponent,
    AdClicksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
