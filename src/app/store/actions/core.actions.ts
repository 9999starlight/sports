import { createAction, props } from '@ngrx/store';
import {
  EventQuotas,
  GroupList,
  GroupSubevents,
  SportsList,
  TopEvents,
} from 'src/app/shared/interfaces/interfaces';
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

export const topEventsGet = createAction(
  '[Landing Page Component Subheader] Get Top Events'
);

export const topEventsGetSuccess = createAction(
  '[Landing Page Component Subheader] Get Top Events Success',
  props<{ results: TopEvents[] }>()
);

export const sportGroupGet = createAction(
  '[Sport Page Component] Get Sport Group List',
  props<{ group: string }>()
);

export const sportGroupGetSuccess = createAction(
  '[Sport Page Component] Get Sport Group List Success',
  props<{ results: GroupList[] }>()
);

export const sportSubeventsGet = createAction(
  '[Group Subevents Component] Get Group Subevents',
  props<{ group: string }>()
);

export const sportSubeventsGetSuccess = createAction(
  '[Group Subevents Component] Get Group Subevents Success',
  props<{ results: GroupSubevents[] }>()
);

export const eventQuotasGet = createAction(
  '[Group Subevents Component] Get Event Quotas',
  props<{ group: string }>()
);

export const eventQuotasGetSuccess = createAction(
  '[EventQuotas Component] Get Event Quotas Success',
  props<{ result: EventQuotas }>()
);
