import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampCardComponent } from './camp-card/camp-card.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CampCardComponent },
  { path: 'campaigns/:id', component: CampaignDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
