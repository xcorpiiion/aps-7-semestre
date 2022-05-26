import {Injectable} from '@angular/core';
import {AbstractService} from '../../../core/service/abstractService';
import {environment} from '../../../../../environments/environment';
import {Professor} from '../model/professor';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService extends AbstractService<Professor, string> {

  protected getUrl(): string {
    return `${environment.apiUrl}/professores`;
  }

  public findByEmail(email: string): Observable<Professor> {
    return this.httpClient.get<Professor>(`${this.getUrl()}/emails/${email}`, {});
  }


}
