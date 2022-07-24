import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../endpoints/endpoints';
import { GroupList, GroupSubevents, SportsList } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  apiUrl = '../api';

  fetchSportslist() {
    return this.http.get<SportsList[]>(`${this.apiUrl}${Endpoints.Sportslist}`);
  }

  fetchSportGroup(group: string) {
    return this.http.get<GroupList[]>(`${this.apiUrl}/${group}`);
  }

  fetchSubevents(event: string) {
    return this.http.get<GroupSubevents[]>(`${this.apiUrl}/${event}`);
  }


  constructor(private http: HttpClient) {}
}
