import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchService } from './services/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sports';
  results$!: Observable<any>

  ngOnInit() {
    this.fetchService.fetchCategories().subscribe(results => {
      console.log('res: ',results)
      //this.results$ = results;
    })
  }
  constructor(private fetchService: FetchService) { }
}
