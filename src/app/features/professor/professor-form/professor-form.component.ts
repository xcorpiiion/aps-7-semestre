import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorFieldsFocusService} from '../../shared/service/ErrorFieldsFocous/error-fields-focus.service';
import {ToastrService} from 'ngx-toastr';
import {LoaderService} from '../../shared/service/loader.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ProfessorService} from '../shared/service/professor.service';
import {Professor} from '../shared/model/professor';
import {StorageService} from '../../shared/service/storage.service';
import {Materia} from '../../shared/model/Materia';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {

  public form: FormGroup;
  private file: any;
  private id: string;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  materias: any[] = [];
  public tipoConta: string;

  //////////////////////////////////////////////////////////////
  /////////////////////// CONSTRUTOR ///////////////////////////
  //////////////////////////////////////////////////////////////

  public constructor(private readonly formBuilder: FormBuilder,
                     private readonly activedRoute: ActivatedRoute,
                     private readonly router: Router,
                     private readonly professorService: ProfessorService,
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
      this.professorService.findById(this.id).subscribe((professor) => {
        this.form.patchValue(professor);
        this.materias = professor.materias.map((materia) => materia.nome);
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
      descricao: []
    });
  }

  //////////////////////////////////////////////////////////////
  /////////////////////// BOTOES ///////////////////////////
  //////////////////////////////////////////////////////////////

  public btnCadastrar(): void {
    if (this.form.valid && this.materias.length > 0) {
      this.id ? this.update() : this.save();
    } else {
      this.errorFieldsFocusService.focousFieldsWithErrors();
    }
  }

  public btnToProfessores(): void {
    this.router.navigate(['professores']);
  }

  public btnExcluir(): void {
    this.professorService.deleteById(this.id).subscribe(() => {
      this.router.navigate(['card']);
    });
  }

  //////////////////////////////////////////////////////////////
  /////////////////////// BOTOES ///////////////////////////
  //////////////////////////////////////////////////////////////

  private save(): void {
    const professor = this.form.getRawValue() as Professor;
    professor.materias = [];
    this.materias.forEach((materia) => {
      const materia1 = new Materia();
      materia1.nome = materia;
      materia1.professorEmail = professor.email;
      materia1.professorNome = professor.nome;
      professor.materias.push(materia1);
    });
    this.professorService.save(professor).subscribe(() => {
      this.router.navigate(['professores']);
    }, (error) => console.error(error));
  }

  private update(): void {
    const professor = this.form.getRawValue() as Professor;
    professor.materias = [];
    this.materias.forEach((materia) => {
      const materia1 = new Materia();
      materia1.nome = materia;
      materia1.professorEmail = professor.email;
      materia1.professorNome = professor.nome;
      professor.materias.push(materia1);
    });
    this.professorService.update(professor, this.id).subscribe(() => {
      this.router.navigate(['professores']);
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
