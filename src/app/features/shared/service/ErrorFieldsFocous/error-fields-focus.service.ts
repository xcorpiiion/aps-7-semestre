import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorFieldsFocusService {

  /**
   * Dá foco para o primeiro campo com erro.
   */
  public focousFieldsWithErrors(): void {
    document.getElementsByClassName('page-content')[0].scrollTo({behavior: 'smooth', top: 250, left: 0});
  }

  /**
   * Deve ser usado com um [ngClass] que serve para deixar o input vermelho quando contains erro.
   */
  public getFieldsContaisValidation(yourForm: FormGroup, yourFormControlName: string): any {
    return {'invalid-select': yourForm.controls[yourFormControlName].touched && yourForm.controls[yourFormControlName].invalid};
  }

  public getErrorMessege(yourForm: FormGroup, yourFormControlName: string, errorMessage: string): string {
    return yourForm.get(yourFormControlName).touched &&
    yourForm.get(yourFormControlName).invalid ? errorMessage : null;
  }

  public isInvalid(yourForm: FormGroup, yourFormControlName: string): boolean {
    return yourForm.get(yourFormControlName).touched &&
      yourForm.get(yourFormControlName).invalid;
  }

}
