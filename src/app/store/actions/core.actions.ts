import { createAction, props } from '@ngrx/store';
import { GroupList, GroupSubevents, SportsList } from 'src/app/shared/interfaces/interfaces';
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

export const sportGroupGet = createAction(
  '[Sport Page Component] Get Sport Group List',
  props<{group: string}>()
);

export const sportGroupGetSuccess = createAction(
  '[Sport Page Component] Get Sport Group List Success',
  props<{ results: GroupList[] }>()
);

export const sportSubeventsGet = createAction(
  '[Group Subevents Component] Get Group Subevents',
  props<{group: string}>()
);

export const sportSubeventsGetSuccess = createAction(
  '[Group Subevents Component] Get Group Subevents Success',
  props<{ results: GroupSubevents[] }>()
);