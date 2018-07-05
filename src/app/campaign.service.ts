import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Campaign } from './campaign';
import { CAMPAIGNS } from './mock-campaigns';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor() { }

  getCampaigns(): Observable<Campaign[]> {
    return of(CAMPAIGNS);
  }

  getCampaign(id: number): Observable<Campaign> {
    // TODO: send the message _after_ fetching the hero
    return of(CAMPAIGNS.find(campaign => campaign.id === id));
  }
}
