import {AdsReducer, AdsState} from './ads.reducer';
import {combineReducers, Reducer} from 'redux';

export interface AppState {
  ads_state: AdsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  ads_state: AdsReducer
});

export default rootReducer;
