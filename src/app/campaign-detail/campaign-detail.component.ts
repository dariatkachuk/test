import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Campaign } from '../campaign';
import { CampaignService }  from '../campaign.service';
import { PostsService }  from '../posts.service';
import { PostComponent } from '../post/post.component';
import { PostType } from '../post';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})

export class CampaignDetailComponent implements OnInit {

  @Input() campaign: Campaign;
  @Input() posts: PostType[];

  constructor(
    private route: ActivatedRoute,
    private campaignService: CampaignService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCampaign();
  }

  getCampaign(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.campaignService.getCampaign(id)
      .subscribe(campaign => this.campaign = campaign);
  }


}
