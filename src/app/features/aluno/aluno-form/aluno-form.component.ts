import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorFieldsFocusService} from '../../shared/service/ErrorFieldsFocous/error-fields-focus.service';
import {ToastrService} from 'ngx-toastr';
import {LoaderService} from '../../shared/service/loader.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {AlunoService} from '../shared/service/aluno.service';
import {Aluno} from '../shared/model/aluno';
import {StorageService} from '../../shared/service/storage.service';
import {Materia} from '../../shared/model/Materia';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  public form: FormGroup;
  private file: any;
  private id: string;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  public materias: any[] = [];
  public materiasShow: any[] = [];
  public tipoConta: string;

  //////////////////////////////////////////////////////////////
  /////////////////////// CONSTRUTOR ///////////////////////////
  //////////////////////////////////////////////////////////////

  public constructor(private readonly formBuilder: FormBuilder,
                     private readonly activedRoute: ActivatedRoute,
                     private readonly router: Router,
                     private readonly alunoService: AlunoService,
                     private readonly storageService: StorageService,
                     private readonly sanitizer: DomSanitizer,
                     public readonly errorFieldsFocusService: ErrorFieldsFocusService,
                     private readonly toastrService: ToastrService,
                     private readonly loaderService: LoaderService) {
  }

  //////////////////////////////////////////////////////////////
  /////////////////////// INICIALIZADORES ///////////////////////////
  //////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    this.initForm();
    this.id = this.activedRoute.snapshot.params.id;
    const usuarioLogado = JSON.parse(this.storageService.getUsuarioLogado());
    this.tipoConta = usuarioLogado.tipoConta;
    if (this.id) {
      this.alunoService.findById(this.id).subscribe((aluno) => {
        this.form.patchValue(aluno);
        this.materias = aluno.materias;
        this.materias = aluno.materias.map((materia) => materia.nome);
        if (this.tipoConta !== 'GERENTE') {
          this.form.get('ra').disable();
          this.form.get('materias').disable();
          this.form.get('senha').disable();
        }
      });
    }
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      ra: ['', [Validators.required]],
      materias: [''],
    });
  }

  //////////////////////////////////////////////////////////////
  /////////////////////// BOTOES ///////////////////////////
  //////////////////////////////////////////////////////////////

  public btnCadastrar(): void {
    if (this.form.valid) {
      this.id ? this.update() : this.save();
    } else {
      this.errorFieldsFocusService.focousFieldsWithErrors();
    }
  }

  public btnToCategoria(): void {
    this.router.navigate(['alunos']);
  }

  public btnExcluir(): void {
    this.alunoService.deleteById(this.id).subscribe(() => {
      this.router.navigate(['card']);
    });
  }

  //////////////////////////////////////////////////////////////
  /////////////////////// BOTOES ///////////////////////////
  //////////////////////////////////////////////////////////////

  private save(): void {
    const aluno = this.form.value as Aluno;
    aluno.materias = [];
    this.materias.forEach((materia) => {
      const materia1 = new Materia();
      materia1.nome = materia;
      materia1.professorEmail = aluno.email;
      materia1.professorNome = aluno.nome;
      aluno.materias.push(materia1);
    });
    this.alunoService.save(aluno).subscribe((prof) => {
      this.router.navigate(['alunos']);
    }, (error) => console.error(error));
  }

  private update(): void {
    const aluno = this.form.getRawValue() as Aluno;
    aluno.materias = [];
    this.materias.forEach((materia) => {
      const materia1 = new Materia();
      materia1.nome = materia;
      materia1.professorEmail = aluno.email;
      materia1.professorNome = aluno.nome;
      aluno.materias.push(materia1);
    });
    this.alunoService.update(aluno, this.id).subscribe(() => {
      this.router.navigate(['alunos']);
    }, (error) => console.error(error));
  }

  private onError(error): void {
    this.loaderService.hide();
    console.error(error);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.materias.push(value);
    }
  }

  remove(fruit: any): void {
    if (this.tipoConta !== 'GERENTE') {
      return;
    }
    const index = this.materias.indexOf(fruit);
    if (index >= 0) {
      this.materias.splice(index, 1);
    }
  }

  //////////////////////////////////////////////////////////////
  /////////////////////// GET AND SET ///////////////////////////
  //////////////////////////////////////////////////////////////

}
