import {Injectable} from '@angular/core';
import {AbstractService} from '../../../core/service/abstractService';
import {environment} from '../../../../../environments/environment';
import {Aluno} from '../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService extends AbstractService<Aluno, string> {

  protected getUrl(): string {
    return `${environment.apiUrl}/alunos`;
  }


}
