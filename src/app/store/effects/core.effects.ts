import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, exhaustMap } from 'rxjs/operators';
import { FetchService } from 'src/app/shared/services/fetch.service';
import * as CoreActions from '../actions/core.actions';
import { Store } from '@ngrx/store';
import { loaderStatus } from '../actions/core.actions';
import {
  ActiveMarketsMondiali,
  ActiveOddGroupsMondiali,
  EventQuotas,
  GroupList,
  GroupSubevents,
  SportsList,
  TopEvents,
} from 'src/app/shared/interfaces/interfaces';

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

  loadActiveMarkets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.activeMarketsGet),
      tap(() => {
        this.store.dispatch(loaderStatus({ loaderVisible: true }));
      }),
      exhaustMap(() => {
        return this.fetchService.fetchActiveMarketsMondiali().pipe(
          map((res: ActiveMarketsMondiali[]) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            const results = res;
            return CoreActions.activeMarketsGetSuccess({ results });
          }),
          catchError((err) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            throw Error(err.message);
          })
        );
      })
    );
  });


  loadActiveOddGroups$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoreActions.activeOddGroupsMondiali),
      tap(() => {
        this.store.dispatch(loaderStatus({ loaderVisible: true }));
      }),
      exhaustMap(() => {
        return this.fetchService.fetchActiveOddGroupsMondiali().pipe(
          map((res: ActiveOddGroupsMondiali[]) => {
            this.store.dispatch(loaderStatus({ loaderVisible: false }));
            const results = res;
            console.log('effects res: ', results)
            return CoreActions.activeOddGroupsMondialiSuccess({ results });
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
    private store: Store
  ) {}
}
