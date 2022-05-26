import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class CookieUtilsService {

  constructor(private readonly cookieService: CookieService) {
  }

  public set(nomeCookie: string, value: string, expireDate: Date): void {
    if (environment.sameSite) {
      this.cookieService.set(nomeCookie, value, expireDate, '/', '', true, 'None');
    } else {
      this.cookieService.set(nomeCookie, value, expireDate, '/', '', false, 'Strict');
    }
  }
}
