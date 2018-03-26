import {InjectionToken} from '@angular/core';
import {AppState, default as reducer} from '../reducers/app.reducer';
import {compose, createStore, Store, StoreEnhancer} from 'redux';


export const AppStore = new InjectionToken('App.Store');

const devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    reducer,
    compose(devtools)
  );
}

export const appStoreProviders  = [{provide: AppStore, useFactory: createAppStore}];
