import {Ad} from '../../models/ad.model';
import {Action, ActionCreator} from 'redux';

export const UPDATE_ACTIVE_ADS = '[Ads] Get';
export interface UpdateActiveAdsAction extends Action {
  ads: Ad[];
}
// updateActiveAds to be called once http GET in ads services, ads returned, first update the store, second get view with selector.
export const updateActiveAds: ActionCreator<UpdateActiveAdsAction> =
  (ads) =>
      ({type: UPDATE_ACTIVE_ADS, ads: ads});




