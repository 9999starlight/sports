import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../endpoints/endpoints';
import { SportsList } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  apiUrl = '../api';

  fetchSportslist() {
    return this.http.get<SportsList[]>(`${this.apiUrl}${Endpoints.Sportslist}`);
  }
   
  constructor(private http: HttpClient) { }
}
