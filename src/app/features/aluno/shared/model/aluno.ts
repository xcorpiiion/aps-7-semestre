import 'reflect-metadata';
import {AbstractId} from '../../../core/model/abstract-id';
import {Materia} from '../../../shared/model/Materia';

export class Aluno extends AbstractId {
  public nome: string;
  public ra: string;
  public materias: Materia[];
  public email: string;
  public senha: string;
  public tipoConta: string;
}
