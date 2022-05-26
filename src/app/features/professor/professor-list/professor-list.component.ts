import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfessorService} from '../shared/service/professor.service';
import {Professor} from '../shared/model/professor';
import {pluck} from 'rxjs/operators';
import {StorageService} from '../../shared/service/storage.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  public professores: Professor[] = [];
  public displayedColumns: string[] = ['dataCriacao', 'ra', 'nome'];

  constructor(private readonly router: Router,
              private readonly storageService: StorageService,
              private readonly professorService: ProfessorService) {
  }

  public ngOnInit(): void {
    const user = JSON.parse(this.storageService.getUsuarioLogado());
    if (user.tipoConta === 'GERENTE') {
      this.professorService.findAll().pipe(pluck(('body'))).subscribe((professores) => this.professores = professores);
    } else {
      this.professorService.findByEmail(user.email).subscribe((professor) => this.professores = [professor]);
    }
  }

  public btnToEditar(professor: any): void {
    this.router.navigate(['professores', professor.id]);
  }

  public btnToCadatro(): void {
    this.router.navigate(['professores', 'novo']);
  }

}
