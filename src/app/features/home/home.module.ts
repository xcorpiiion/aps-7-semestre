import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CoreModule} from '../core/core.module';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {HomeCardsComponent} from './home-cards/home-cards.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [HomeComponent, HomeCardsComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,
    RouterModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
  ]
})
export class HomeModule {
}
