import {AbstractId} from '../../../core/model/abstract-id';

export class Gerente extends AbstractId {
  public nome: string;
  public email: string;
  public senha: string;
  public tipoConta: string;
}
