import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginRequest} from '../../shared/model/login-request';
import {ProfessorService} from '../../professor/shared/service/professor.service';
import {GerenteService} from '../../gerente/shared/service/gerente.service';
import {StorageService} from '../../shared/service/storage.service';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private readonly formBuilder: FormBuilder,
              private readonly professorService: ProfessorService,
              private readonly storageService: StorageService,
              private readonly gerenteService: GerenteService,
              private readonly router: Router) {
  }

  public loginForm: FormGroup;

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    const login: LoginRequest = {
      email: this.loginForm.get('email').value,
      senha: this.loginForm.get('password').value,
    };
    this.gerenteService.login(login).pipe(pluck(('body'))).subscribe((user) => {
      console.log(user);
      this.storageService.setUsuarioLogado(user);
      this.router.navigate(['card']);
    });
  }

  public signup(): void {
    this.router.navigate(['signup']);
  }

}
