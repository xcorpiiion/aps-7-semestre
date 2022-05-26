import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector
} from '@angular/core';
import {LoaderComponent} from '../components/loader/loader.component';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderComponent: ComponentRef<LoaderComponent>;
  private loaderComponentFactory: ComponentFactory<LoaderComponent>;
  private loaderViewRef: EmbeddedViewRef<any>;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly applicationRef: ApplicationRef,
    private readonly injector: Injector,
    @Inject(DOCUMENT) private readonly _document: Document) {
    this.injectLoaderComponent();
  }


  public show() {
    this.loaderComponent.instance.show();
  }

  public hide() {
    this.loaderComponent.instance.hide();
  }

  private injectLoaderComponent() {
    this.loaderComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
    this.loaderComponent = this.loaderComponentFactory.create(this.injector);
    this.loaderViewRef = this.loaderComponent.hostView as EmbeddedViewRef<any>;
    this.applicationRef.attachView(this.loaderViewRef);
    this._document.body.appendChild(this.loaderViewRef.rootNodes[0]);
  }
}
