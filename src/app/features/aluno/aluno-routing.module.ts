import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlunoListComponent} from './aluno-list/aluno-list.component';
import {AlunoFormComponent} from './aluno-form/aluno-form.component';
import {AuthGuard} from '../core/auth/auth-guard.service';


const routes: Routes = [
  {
    path: 'alunos',
    component: AlunoListComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'alunos/novo',
    component: AlunoFormComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'alunos/:id',
    component: AlunoFormComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule {
}
