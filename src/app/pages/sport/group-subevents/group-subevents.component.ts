import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GroupSubevents } from 'src/app/shared/interfaces/interfaces';
import { sportSubeventsGet } from 'src/app/store/actions/core.actions';
import {
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
  constructor(private store: Store, private route: ActivatedRoute) {
    this.routeParams = this.route.snapshot.params;
  }

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
    this.store.dispatch(
      sportSubeventsGet({ group: this.routeParams['subevent'] })
    );
    this.eventsList$ = this.store.select(getGroupEvents);
  }
}
