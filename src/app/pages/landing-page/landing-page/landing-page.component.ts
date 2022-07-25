import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { sportsListGet, topEventsGet } from 'src/app/store/actions/core.actions';
import {
  getLoading,
  getSportsList,
  getTopEvents,
} from 'src/app/store/selectors/core.selectors';
import { Observable } from 'rxjs';
import { SportsList, TopEvents } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  sportsList$!: Observable<{ results: SportsList[] }> | undefined;
  topEvents$!: Observable<{ results: TopEvents[] | null }> | undefined;
  showLoading$: Observable<boolean> | undefined;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
    this.store.dispatch(topEventsGet());
    this.store.dispatch(sportsListGet());
    this.topEvents$ = this.store.select(getTopEvents)
    this.sportsList$ = this.store.select(getSportsList);
  }
}
