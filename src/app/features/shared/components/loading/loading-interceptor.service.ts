import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingType} from './shared/enum/loading-type.enum';
import {finalize} from 'rxjs/operators';
import {LoadingService} from "./shared/service/loading.service";

@Injectable({providedIn: 'root'})
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.loadingSubject.next(LoadingType.LOADGING);
    return next.handle(req).pipe(finalize(() => this.loadingService.loadingSubject.next(LoadingType.STOPPED)));
  }

}
