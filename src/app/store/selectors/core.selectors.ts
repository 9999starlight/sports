import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedAppState } from '../state';

export const APP_SELECTORS = 'shared';
export const getAppState = createFeatureSelector<sharedAppState>(APP_SELECTORS);

export const getLoading = createSelector(
  getAppState,
  (state) => state.loader.visible
);
export const getSportsList = createSelector(
  getAppState,
  (state) => state.sportsList
);
export const getGroupList = createSelector(
  getAppState,
  (state) => state.groupList
);
export const getGroupEvents = createSelector(
  getAppState,
  (state) => state.eventsList
);
export const getEventQuotas = createSelector(
  getAppState,
  (state) => state.eventQuotas
);
export const getTopEvents = createSelector(
  getAppState,
  (state) => state.topEvents
);
