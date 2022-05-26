import {Component, OnInit} from '@angular/core';
import {LoadingType} from './shared/enum/loading-type.enum';
import {BehaviorSubject} from 'rxjs';
import {LoadingService} from "./shared/service/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private readonly loadingService: LoadingService) {
  }

  public ngOnInit(): void {
    this.loadingService.getLoading().subscribe((loading) => {
      if (loading === LoadingType.LOADGING) {
        this.isLoading.next(true);
      } else {
        this.isLoading.next(false);
      }
    });
  }

}
