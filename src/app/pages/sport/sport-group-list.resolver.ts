import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { GroupList } from 'src/app/shared/interfaces/interfaces';
import { FetchService } from 'src/app/shared/services/fetch.service';
import { AppState } from 'src/app/store';
import { sportGroupGet } from 'src/app/store/actions/core.actions';
import { getGroupList } from 'src/app/store/selectors/core.selectors';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SportGroupListResolver implements Resolve<GroupList[]> {
  constructor(
    private router: Router,
    private fetchService: FetchService
  ) {}
  resolve(route: ActivatedRouteSnapshot) {
    const groupParam = route.params['group'];
    return this.fetchService.fetchSportGroup(groupParam).pipe(
      catchError(() => {
        this.router.navigateByUrl('no-page-found');
        return EMPTY;
      })
    );
  }
}
