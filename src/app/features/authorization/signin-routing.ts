import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule {

  constructor() {
  }
}
