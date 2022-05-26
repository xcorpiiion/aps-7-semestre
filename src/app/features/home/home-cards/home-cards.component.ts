import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/service/storage.service';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent implements OnInit {

  public user: any;

  constructor(private readonly router: Router,
              private readonly storageService: StorageService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(this.storageService.getUsuarioLogado());
  }

  public btnClickCard(routers: string[]): void {
    this.router.navigate(routers);
    this.user = JSON.parse(this.storageService.getUsuarioLogado());
  }

  public canShowProfessor(): boolean {
    return this.user?.tipoConta === 'GERENTE' || this.user?.tipoConta === 'PROFESSOR';
  }

  public canShowAluno(): boolean {
    return this.user?.tipoConta === 'GERENTE' || this.user?.tipoConta === 'ALUNO';
  }

}
