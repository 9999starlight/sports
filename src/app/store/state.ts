import {
  GroupList,
  GroupSubevents,
  LoaderState,
  SportsList,
} from '../shared/interfaces/interfaces';
import { ListState } from './interfaces/state.models';

export interface sharedAppState {
  loader: LoaderState;
  sportsList: { results: SportsList[] };
  groupList: { results: GroupList[] };
  eventsList: { results: GroupSubevents[] };
}

export const initialAppState: sharedAppState = {
  loader: {
    visible: false,
  },

  sportsList: {
    results: [],
  },

  groupList: {
    results: [],
  },

  eventsList: {
    results: [],
  }
};
