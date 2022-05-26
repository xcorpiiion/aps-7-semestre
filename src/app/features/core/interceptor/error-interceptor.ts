import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {StorageService} from '../../shared/service/storage.service';
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  constructor(private readonly storage: StorageService,
              private readonly toastrService: ToastrService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError((error: HttpErrorResponse) => {
          let errorHttp = error;
          if (errorHttp.error) {
            errorHttp = error.error;
          }
          switch (error.status) {
            case 401:
              this.handle401();
              break;
            case 402:
              this.handle403();
              break;
            case 404:
              this.handle404();
              break;
            case 422:
              this.handle422(error);
              break;
            default:
              this.handleDefultError(error);
          }
          return throwError(errorHttp);
        })
      );
  }

  private handle403(): void {
    this.storage.setLocalUser(null);
  }

  private handle401(): void {
    this.toastrService.error('Authentication failure', 'Error 401.')
  }

  private handle422(error: HttpErrorResponse): void {
    this.toastrService.error(error.message, 'Error ' + error.status);
  }

  private handle404(): void {
    this.toastrService.error('Não foi possivel encontrar os dados', 'Error ');
  }

  private handleDefultError(error: HttpErrorResponse): void {
    this.toastrService.error(error.message, 'Error ' + error.status);
  }
}
