import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlunoService} from '../shared/service/aluno.service';
import {pluck} from 'rxjs/operators';
import {Aluno} from '../shared/model/aluno';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  public alunos: Aluno[] = [];
  public displayedColumns: string[] = ['dataCriacao', 'ra', 'nome'];

  constructor(private readonly router: Router,
              private readonly alunoService: AlunoService) {
  }

  public ngOnInit(): void {
    this.alunoService.findAll().pipe(pluck(('body'))).subscribe((professores) => this.alunos = professores);
  }

  public btnToEditar(professor: any): void {
    this.router.navigate(['alunos', professor.id]);
  }

  public btnToCadatro(): void {
    this.router.navigate(['alunos', 'novo']);
  }

}
