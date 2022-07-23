import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  apiUrl = '../api';

  fetchCategories() {
    return this.http.get(`${this.apiUrl}/sportslist`);
  }
   
  constructor(private http: HttpClient) { }
}
