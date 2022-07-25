import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, exhaustMap } from 'rxjs/operators';
import { FetchService } from 'src/app/shared/services/fetch.service';
import * as CoreActions from '../actions/core.actions';
import { Store } from '@ngrx/store';
import { loaderStatus } from '../actions/core.actions';
import {
  EventQuotas,
  GroupList,
  GroupSubevents,
  SportsList,
  TopEvents,
} from 'src/app/shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable()
export class SharedEffects {
  loadSportsList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.sportsListGet),
      tap(() => {
        this.store.dispatch(loaderStatus({ loaderVisible: true }));
      }),
      exhaustMap(() => {
        return this.fetchService.fetchSportslist().pipe(
          map((res: SportsList[]) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            const results = res;
            return CoreActions.sportsListGetSuccess({ results });
          }),
          catchError((err) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            throw Error(err.message);
          })
        );
      })
    );
  });

  loadGroupList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.sportGroupGet),
      tap(() => {
        this.store.dispatch(loaderStatus({ loaderVisible: true }));
      }),
      exhaustMap((group) => {
        return this.fetchService.fetchSportGroup(group.group).pipe(
          map((res: GroupList[]) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            const results = res;
            return CoreActions.sportGroupGetSuccess({ results });
          }),
          catchError((err) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            throw Error(err.message);
          })
        );
      })
    );
  });

  loadGroupEventsList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.sportSubeventsGet),
      tap(() => {
        this.store.dispatch(loaderStatus({ loaderVisible: true }));
      }),
      exhaustMap((group) => {
        return this.fetchService.fetchSubevents(group.group).pipe(
          map((res: GroupSubevents[]) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            const results = res;
            return CoreActions.sportSubeventsGetSuccess({ results });
          }),
          catchError((err) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            throw Error(err.message);
          })
        );
      })
    );
  });

  loadEventQuotas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.eventQuotasGet),
      tap(() => {
        this.store.dispatch(loaderStatus({ loaderVisible: true }));
      }),
      exhaustMap((group) => {
        return this.fetchService.fetchEventQuotas(group.group).pipe(
          map((res: EventQuotas) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            const result = res;
            return CoreActions.eventQuotasGetSuccess({ result });
          }),
          catchError((err) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            throw Error(err.message);
          })
        );
      })
    );
  });

  loadTopEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.topEventsGet),
      tap(() => {
        this.store.dispatch(loaderStatus({ loaderVisible: true }));
      }),
      exhaustMap(() => {
        return this.fetchService.fetchTopEvents().pipe(
          map((res: TopEvents[]) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            const results = res;
            return CoreActions.topEventsGetSuccess({ results });
          }),
          catchError((err) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            throw Error(err.message);
          })
        );
      })
    );
  });


  constructor(
    private actions$: Actions,
    private fetchService: FetchService,
    private store: Store,
    private router: Router
  ) {}
}
