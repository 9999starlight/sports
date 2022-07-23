import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedAppState } from '../state';

export const APP_SELECTORS = 'shared';
export const getAppState = createFeatureSelector<sharedAppState>(APP_SELECTORS);

//
export const getLoading = createSelector(getAppState, state => state.loader.visible)
export const getSportsList = createSelector(getAppState, state => state.sportsList)