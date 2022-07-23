import { createAction, props } from '@ngrx/store';
import { SportsList } from 'src/app/shared/interfaces/interfaces';
import { ListState } from '../interfaces/state.models';


export const loaderStatus = createAction(
  '[Loader Status] Change Loader Status',
  props<{ loaderVisible: boolean }>()
);

export const sportsListGet = createAction(
  '[Landing Page Component] Get List Sports'
);

export const sportsListGetSuccess = createAction(
  '[Landing Page Component] Get List Sports Success',
  props<{ results: SportsList[] }>()
);
