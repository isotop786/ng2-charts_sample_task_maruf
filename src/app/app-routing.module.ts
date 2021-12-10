import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components import
import { EbookRoyaltyComponent } from './charts/ebook-royalty/ebook-royalty.component';
import { PaperbackRoyaltyComponent } from './charts/paperback-royalty/paperback-royalty.component';
import { AdSpendComponent } from './ad-spend/ad-spend.component';
import { AdImpressionsComponent } from './ad-impressions/ad-impressions.component';
import { AdClicksComponent } from './ad-clicks/ad-clicks.component';

const routes: Routes = [
  {path:'ebook', component:EbookRoyaltyComponent},
  {path:'paperback', component:PaperbackRoyaltyComponent},
  {path:'adspend', component:AdSpendComponent},
  {path:'adimpression', component:AdImpressionsComponent},
  {path:'adclick', component:AdClicksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
