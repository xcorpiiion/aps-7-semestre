import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin/signin.component';
import {AuthorizationRoutingModule} from './signin-routing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ]
})
export class AuthorizationModule {
}
