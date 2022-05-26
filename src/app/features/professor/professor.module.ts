import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorListComponent} from './professor-list/professor-list.component';
import {MatListModule} from '@angular/material/list';
import {ProfessorRoutingModule} from './professor-routing.module';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ProfessorListComponent,
    ProfessorFormComponent
  ],
    imports: [
        CommonModule,
        MatListModule,
        ProfessorRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatIconModule,
        MatTableModule,
    ]
})
export class ProfessorModule {
}
