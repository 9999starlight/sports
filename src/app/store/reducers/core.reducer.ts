import {
  createReducer,
  on
} from '@ngrx/store';
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
  }),

  on(CoreActions.sportGroupGetSuccess, (state, { results }) => {
    return { ...state, groupList: { results } };
  }),

  on(CoreActions.sportSubeventsGetSuccess, (state, { results }) => {
    return { ...state, eventsList: { results } };
  }),

  on(CoreActions.activeMarketsGetSuccess, (state, { results }) => {
    return { ...state, activeMarketsMondIali: { results } };
  }),

  on(CoreActions.activeOddGroupsMondialiSuccess, (state, { results }) => {
    return { ...state, activeOddGroups: { results } };
  }),

  on(CoreActions.eventQuotasGetSuccess, (state, { result }) => {
    return { ...state, eventQuotas: { result } };
  }),

  on(CoreActions.topEventsGetSuccess, (state, { results }) => {
    return { ...state, topEvents: { results } };
  })
);
