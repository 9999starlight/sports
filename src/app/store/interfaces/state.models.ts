import {
  GroupList,
  GroupSubevents,
  SportsList,
} from 'src/app/shared/interfaces/interfaces';

export interface ListState {
  results: SportsList[];
}

export interface GroupListResults {
  results: GroupList[];
}

export interface SubeventsResult {
  results: GroupSubevents[];
}
