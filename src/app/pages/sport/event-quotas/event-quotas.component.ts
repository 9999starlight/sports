import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventQuotas } from 'src/app/shared/interfaces/interfaces';
import { AppState } from 'src/app/store';
import { eventQuotasGet } from 'src/app/store/actions/core.actions';
import { getEventQuotas, getLoading } from 'src/app/store/selectors/core.selectors';

@Component({
  selector: 'app-event-quotas',
  templateUrl: './event-quotas.component.html',
  styleUrls: ['./event-quotas.component.scss']
})
export class EventQuotasComponent implements OnInit {
  eventQuotas$?: Observable<{result: EventQuotas  | null}> | undefined;
  showLoading$: Observable<boolean> | undefined;
  routeParams!: any
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.routeParams = this.route.snapshot.params;
   }

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
    this.store.dispatch(
      eventQuotasGet({ group: this.routeParams['quotas'] })
    );
    this.eventQuotas$ = this.store.select(getEventQuotas)
  }
}
