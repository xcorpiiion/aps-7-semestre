import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {FeatureModule} from './features/feature.module';
import {AppRoutingModule} from './app-routing.module';
import {ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';
import {NgxMaskModule} from 'ngx-mask';
import {SharedModule} from './features/shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FeatureModule,
    AppRoutingModule,
    ToastNoAnimationModule,
    NgbModule,
    RouterModule.forRoot([]),
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    SharedModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
