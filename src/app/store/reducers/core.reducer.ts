import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  on,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { initialAppState } from '../state';
import * as CoreActions from '../actions/core.actions';

export const appSharedReducer = createReducer(
  initialAppState,
  on(CoreActions.loaderStatus, (state, action) => {
    return {
      ...state,
      loader: { visible: action.loaderVisible },
    };
  }),

  on(CoreActions.sportsListGetSuccess, (state, { results }) => {
    return { ...state, sportsList: { results } };
  })
);
