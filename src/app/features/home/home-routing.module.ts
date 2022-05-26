import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeCardsComponent} from './home-cards/home-cards.component';
import {AuthGuard} from '../core/auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'card',
    pathMatch: 'full',
    component: HomeCardsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'card',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

  constructor() {
  }
}
