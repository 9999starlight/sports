import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../endpoints/endpoints';
import { ActiveMarketsMondiali, ActiveOddGroupsMondiali, EventQuotas, GroupList, GroupSubevents, SportsList, TopEvents } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  apiUrl = '../api';

  fetchSportslist() {
    return this.http.get<SportsList[]>(`${this.apiUrl}/${Endpoints.Sportslist}`);
  }

  fetchTopEvents() {
    return this.http.get<TopEvents[]>(`${this.apiUrl}/${Endpoints.TopEvents}`);
  }

  fetchSportGroup(group: string) {
    return this.http.get<GroupList[]>(`${this.apiUrl}/${group}`);
  }

  fetchSubevents(event: string) {
    return this.http.get<GroupSubevents[]>(`${this.apiUrl}/${event}`);
  }

  fetchActiveMarketsMondiali() {
    return this.http.get<ActiveMarketsMondiali[]>(`${this.apiUrl}/${Endpoints.ActiveMarketsMondiali}`);
  }

  fetchActiveOddGroupsMondiali() {
    return this.http.get<ActiveOddGroupsMondiali[]>(`${this.apiUrl}/${Endpoints.ActiveOddgroupsMondiali}`);
  }

  fetchEventQuotas(quotas: string) {
    return this.http.get<EventQuotas>(`${this.apiUrl}/${quotas}`);
  }


  constructor(private http: HttpClient) {}
}
