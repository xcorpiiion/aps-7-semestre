import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {ActivatedRoute, Router} from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {delay} from 'rxjs/operators';
import {StorageService} from '../shared/service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav) public sidenav!: MatSidenav;

  constructor(private readonly router: Router,
              private readonly storageService: StorageService,
              private readonly activatedRoute: ActivatedRoute,
              private observer: BreakpointObserver) {
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.observer
      .observe(['(max-width: 1044px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
        }
      });
  }

  public btnToProfile(): void {
    this.router.navigate(['login']);
    this.storageService.removeUsuarioLogado();
  }

  public btnToCard(): void {
    this.router.navigate(['card']);
  }

  public btnToCarrinho(): void {
  }

}
