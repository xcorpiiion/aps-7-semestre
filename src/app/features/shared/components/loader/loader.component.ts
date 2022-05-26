import {Component, EventEmitter} from '@angular/core';
import {timer} from "rxjs";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  public visibilityEmmiter = new EventEmitter<boolean>(true);

  private readonly minVisibilityTimeMs = 1000;

  public hide() {
    const hide = () => this.visibilityEmmiter.emit(false);
    timer(this.minVisibilityTimeMs)
      .pipe(take(1), tap(hide))
      .subscribe();
  }

  public show() {
    this.visibilityEmmiter.emit(true);
  }

}
