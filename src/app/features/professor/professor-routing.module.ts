import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfessorListComponent} from './professor-list/professor-list.component';
import {ProfessorFormComponent} from './professor-form/professor-form.component';
import {AuthGuard} from '../core/auth/auth-guard.service';


const routes: Routes = [
  {
    path: 'professores',
    component: ProfessorListComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'professores/novo',
    component: ProfessorFormComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'professores/:id',
    component: ProfessorFormComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule {
}
