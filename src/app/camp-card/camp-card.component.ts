import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';
import { CampaignService } from '../campaign.service';


@Component({
  selector: 'app-camp-card',
  templateUrl: './camp-card.component.html',
  styleUrls: ['./camp-card.component.css']
})
export class CampCardComponent implements OnInit {
  
  selectedCampaign: Campaign;

  campaigns: Campaign[];

  show = 7;
  
  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.getCampaigns();
  }

  onSelect(campaign: Campaign): void {
    this.selectedCampaign = campaign;
  }

  getCampaigns(): void {
    this.campaignService.getCampaigns()
        .subscribe(campaigns => this.campaigns = campaigns);
  }

}
