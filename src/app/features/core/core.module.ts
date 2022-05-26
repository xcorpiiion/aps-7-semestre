import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoaderService} from '../shared/service/loader.service';
import {CookieUtilsService} from './service/cookie-utils-service.service';
import {LoaderComponent} from '../shared/components/loader/loader.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorInterceptor} from './interceptor/error-interceptor';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef} from '@angular/material/dialog';


@NgModule({
  imports: [
    MatProgressSpinnerModule,
  ],
  exports: [
    MatProgressSpinnerModule,
  ],
  providers: [
    LoaderService,
    CookieUtilsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    ErrorInterceptor,
  ],
  entryComponents: [
    LoaderComponent
  ]
})
export class CoreModule {
}
