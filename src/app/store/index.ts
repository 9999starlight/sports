import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import {  sharedAppState } from './state';
import { appSharedReducer } from './reducers/core.reducer';
import { APP_SELECTORS } from './selectors/core.selectors';

export interface AppState {
  [APP_SELECTORS]: sharedAppState;
}

export const appReducers: ActionReducerMap<AppState> = {
  [APP_SELECTORS]: appSharedReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
