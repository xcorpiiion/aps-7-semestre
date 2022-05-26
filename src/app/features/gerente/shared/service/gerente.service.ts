import {Injectable} from '@angular/core';
import {AbstractService} from '../../../core/service/abstractService';
import {environment} from '../../../../../environments/environment';
import {Gerente} from '../model/gerente';

@Injectable({
  providedIn: 'root'
})
export class GerenteService extends AbstractService<Gerente, string> {

  protected getUrl(): string {
    return `${environment.apiUrl}/gerentes`;
  }

}
