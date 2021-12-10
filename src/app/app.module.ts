import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EbookRoyaltyComponent } from './charts/ebook-royalty/ebook-royalty.component';
import { PaperbackRoyaltyComponent } from './charts/paperback-royalty/paperback-royalty.component';
import { AdSpendComponent } from './ad-spend/ad-spend.component';
import { AdImpressionsComponent } from './ad-impressions/ad-impressions.component';
import { AdClicksComponent } from './ad-clicks/ad-clicks.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EbookRoyaltyComponent,
    PaperbackRoyaltyComponent,
    AdSpendComponent,
    AdImpressionsComponent,
    AdClicksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
