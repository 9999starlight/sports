import {
  EventQuotas,
  GroupList,
  GroupSubevents,
  LoaderState,
  SportsList,
  TopEvents,
} from '../shared/interfaces/interfaces';
import { ListState } from './interfaces/state.models';

export interface sharedAppState {
  loader: LoaderState;
  topEvents: { results: TopEvents[] };
  sportsList: { results: SportsList[] };
  groupList: { results: GroupList[] };
  eventsList: { results: GroupSubevents[] };
  eventQuotas: { result: EventQuotas | null };
}

export const initialAppState: sharedAppState = {
  loader: {
    visible: false,
  },

  topEvents: {
    results: [],
  },

  sportsList: {
    results: [],
  },

  groupList: {
    results: [],
  },

  eventsList: {
    results: [],
  },

  eventQuotas: {
    result: null
  }
};
