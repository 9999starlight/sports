import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, exhaustMap } from 'rxjs/operators';
import { FetchService } from 'src/app/shared/services/fetch.service';
import * as CoreActions from '../actions/core.actions';
import { Store } from '@ngrx/store';
import { loaderStatus } from '../actions/core.actions';
import { SportsList } from 'src/app/shared/interfaces/interfaces';

@Injectable()
export class SharedEffects {
  loadGamesList$ = createEffect(() => {
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
            console.log('effects error: ', err);
            throw Error(err.message);
          })
        );
      })
      //share()
    );
  });

  constructor(
    private actions$: Actions,
    private fetchService: FetchService,
    private store: Store
  ) {}
}
