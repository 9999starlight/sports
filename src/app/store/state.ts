import {
  ActiveMarketsMondiali,
  ActiveOddGroupsMondiali,
  EventQuotas,
  GroupList,
  GroupSubevents,
  LoaderState,
  SportsList,
  TopEvents,
} from '../shared/interfaces/interfaces';

export interface sharedAppState {
  loader: LoaderState;
  topEvents: { results: TopEvents[] };
  sportsList: { results: SportsList[] };
  groupList: { results: GroupList[] };
  eventsList: { results: GroupSubevents[] };
  activeMarketsMondIali: { results: ActiveMarketsMondiali[] };
  activeOddGroups: { results: ActiveOddGroupsMondiali[] };
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

  activeMarketsMondIali: {
    results: [],
  },

  activeOddGroups: {
    results: []
  },

  eventQuotas: {
    result: null,
  },
};
