import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/shared/services/fetch.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { sportsListGet } from 'src/app/store/actions/core.actions';
import {
  getLoading,
  getSportsList,
} from 'src/app/store/selectors/core.selectors';
import { Observable } from 'rxjs';
import { SportsList } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  sportsList$!: Observable<{ results: SportsList[] }> | undefined;
  showLoading$: Observable<boolean> | undefined;

  constructor(
    private fetchService: FetchService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
    this.store.dispatch(sportsListGet());
    this.sportsList$ = this.store.select(getSportsList);
  }
}
