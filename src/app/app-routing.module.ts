import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';


export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, children: [] },
  { path: 'home', component: HomeComponent, children: [] }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {}
