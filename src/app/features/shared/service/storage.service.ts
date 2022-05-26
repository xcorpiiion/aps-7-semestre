import {Injectable} from '@angular/core';
import {LocalUser} from '../model/local-user';
import {STORAGE_KEYS} from '../../core/const/storage_keys.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  public setLocalUser(localUser: LocalUser): void {
    localUser == null ? localStorage.removeItem(STORAGE_KEYS.localUser) :
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(localUser));
  }

  public setUsuarioLogado(user: any): void {
    localStorage.setItem(STORAGE_KEYS.usuarioLogado, JSON.stringify(user));
  }

  public getUsuarioLogado(): any {
    return localStorage.getItem(STORAGE_KEYS.usuarioLogado);
  }

  public removeUsuarioLogado(): void {
    localStorage.removeItem(STORAGE_KEYS.usuarioLogado);
  }

  public isUsuarioLogado(): boolean {
    return localStorage.getItem(STORAGE_KEYS.usuarioLogado) !== null;
  }

}
