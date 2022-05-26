import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormInputComponent} from './components/form-input/form-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoadingComponent} from './components/loading/loading.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {CoreModule} from '../core/core.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import {LoaderComponent} from './components/loader/loader.component';
import {MatBreadcrumbModule} from 'mat-breadcrumb';
import { CardsComponent } from './components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    FormInputComponent,
    NotFoundComponent,
    LoadingComponent,
    LoaderComponent,
    CardsComponent
  ],
  exports: [
    FormInputComponent,
    LoadingComponent,
    LoaderComponent,
    ReactiveFormsModule,
    CardsComponent,
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        CoreModule,
        MatBreadcrumbModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatDividerModule,
        RouterModule,
        MatCardModule,
    ]
})
export class SharedModule {
}
