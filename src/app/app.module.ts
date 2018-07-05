import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { CampCardComponent } from './camp-card/camp-card.component';
import { CampHeaderComponent } from './camp-header/camp-header.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { KeywordChipsComponent } from './keyword-chips/keyword-chips.component';
import { PostComponent } from './post/post.component';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatChipsModule,
  MatTabsModule,
  MatInputModule, 
  MatPaginatorModule, 
  MatSortModule,
  MatIconModule,
  MatButtonToggleModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    AppComponent,
    CampCardComponent,
    CampHeaderComponent,
    CampaignDetailComponent,
    KeywordChipsComponent,
    PostComponent
  ],
  imports: [
    [...materialModules],
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
 }
}
