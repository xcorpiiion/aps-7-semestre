import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {LoadingType} from "../enum/loading-type.enum";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loadingSubject: BehaviorSubject<LoadingType> = new BehaviorSubject<LoadingType>(LoadingType.STOPPED);

  constructor() {
  }

  public getLoading() {
    return this.loadingSubject.asObservable().pipe(startWith(LoadingType.STOPPED));
  }

  public start(): void {
    this.loadingSubject.next(LoadingType.LOADGING);
  }

  public stop(): void {
    this.loadingSubject.next(LoadingType.STOPPED);
  }

}
