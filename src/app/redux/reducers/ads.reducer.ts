import * as AdActions from './../actions/ads.action';
import {Ad} from '../../models/ad.model';
import {Action} from 'redux';
import {createSelector} from 'reselect';

export interface AdsState {
  ads: Ad[];
}

const initialState: AdsState = {ads: []};

export const AdsReducer =
  (state: AdsState = initialState, action: Action) => {
    switch (action.type) {
      case AdActions.UPDATE_ACTIVE_ADS: {
        const ads = (<AdActions.UpdateActiveAdsAction>action).ads;
        return {ads: Object.assign([], ads)};
      }
      default:
        return state;
    }
  };

export const getActiveAds = (state): Ad[] => state.ads_state.ads;


