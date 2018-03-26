import {Inject, Injectable} from '@angular/core';
import {Ad} from '../models/ad.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {AppState} from '../redux/reducers/app.reducer';
import * as Redux from 'redux';
import * as AdActions from './../redux/actions/ads.action';
import {AppStore} from '../redux/stores/app.store';
import 'rxjs/add/operator/mergeMap';
import {getActiveAds} from '../redux/reducers/ads.reducer';


@Injectable()


// AdsService should make http call and update AppState with results
// after completion of update, the view should be retreived with a selector call.

export class AdsService {

  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {}

  retrieveActiveAds() {

    const body = new HttpParams()
      .set(`ads`, 'kijiji');
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const data: Ad[] =  [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
      {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
      {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
      {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
      {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
      {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
      {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
      {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
      {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
      {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
    ];
    // this.http.get(`/ads`, { headers, observe: 'response' })
    //   .map((res: HttpResponse<Ad[]>) => Observable.of(data))
    //   .catch((err: any): Observable<Ad[]> => {
    //       // Observable.throw(console.log(err));
    //       return Observable.of(data);
    //     }
    //   );
    return Observable.of(data).mergeMap(
      (ads) =>
        Observable.of(this.store.dispatch(AdActions.updateActiveAds(ads)))
    );
  }

  getAds(): Ad[] {
    return getActiveAds(this.store.getState());
  }
}

// export interface Element {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
