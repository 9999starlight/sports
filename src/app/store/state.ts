import { LoaderState, SportsList } from '../shared/interfaces/interfaces';
import { ListState } from './interfaces/state.models';

export interface sharedAppState {
  loader: LoaderState;
  sportsList: {results: SportsList[]};
}


export const initialAppState: sharedAppState = {
  loader: {
    visible: false,
  },

  sportsList: {
	results: []
  }
  
};
