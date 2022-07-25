import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/app/shared/endpoints/endpoints';
import { ActiveMarketsMondiali, GroupSubevents } from 'src/app/shared/interfaces/interfaces';
import { activeMarketsGet, activeOddGroupsMondiali, sportSubeventsGet } from 'src/app/store/actions/core.actions';
import {
  getActiveMarketsMondiali,
  getGroupEvents,
  getLoading,
} from 'src/app/store/selectors/core.selectors';

@Component({
  selector: 'app-group-subevents',
  templateUrl: './group-subevents.component.html',
  styleUrls: ['./group-subevents.component.scss'],
})
export class GroupSubeventsComponent implements OnInit {
  showLoading$: Observable<boolean> | undefined;
  routeParams!: any;
  eventsList$!: Observable<{ results: GroupSubevents[] }> | undefined;
  activeMarkets$: Observable<{ results: ActiveMarketsMondiali[] }> | undefined;

  matchQuotas = '';
  constructor(private store: Store, private route: ActivatedRoute, private el: ElementRef) {
    this.routeParams = this.route.snapshot.params;
    console.log('par: ', this.routeParams);
  }
  isActiveOddGroupsShown = false;

  ngOnInit(): void {
    this.matchQuotas = Endpoints.SenegalNetherlandsQuotas
    this.showLoading$ = this.store.select(getLoading);
    this.store.dispatch(activeMarketsGet());
    this.store.dispatch(
      sportSubeventsGet({ group: this.routeParams['subevent'] })
    );
    this.eventsList$ = this.store.select(getGroupEvents);
    this.activeMarkets$ = this.store.select(getActiveMarketsMondiali);
  }

  toggleisActiveOddGroupsShown() {
    this.isActiveOddGroupsShown = !this.isActiveOddGroupsShown;
  }

  showOddGroups() {
    this.store.dispatch(activeOddGroupsMondiali());
    this.toggleisActiveOddGroupsShown();
  }
}
