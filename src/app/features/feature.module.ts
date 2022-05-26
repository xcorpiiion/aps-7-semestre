import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {ProfessorModule} from './professor/professor.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthorizationModule} from './authorization/authorization.module';
import {AlunoModule} from './aluno/aluno.module';

@NgModule({
  declarations: [],
  exports: [
    HomeModule,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthorizationModule,
    CoreModule,
    CommonModule,
    SharedModule,
    RouterModule,
    AlunoModule,
    HomeModule,
    ProfessorModule,
  ]
})
export class FeatureModule {
}
