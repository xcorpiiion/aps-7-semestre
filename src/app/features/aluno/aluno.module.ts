import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlunoListComponent} from './aluno-list/aluno-list.component';
import {MatListModule} from '@angular/material/list';
import {AlunoRoutingModule} from './aluno-routing.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AlunoListComponent,
    AlunoFormComponent
  ],
    imports: [
        CommonModule,
        MatListModule,
        AlunoRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatIconModule,
        MatTableModule,
    ]
})
export class AlunoModule {
}
