import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private menuStatusSubject: BehaviorSubject<any>;
  private loaderStatusSubject: BehaviorSubject<any>;
  private backgroundStatusSubject: BehaviorSubject<any>;
  public menuStatus: Observable<any>
  public loaderStatus: Observable<any>
  public backgroundStatus: Observable<any>
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2,
    private router: Router
  ) {
    this.menuStatusSubject = new BehaviorSubject<boolean>(false)
    this.loaderStatusSubject = new BehaviorSubject<boolean>(true)
    this.backgroundStatusSubject = new BehaviorSubject<boolean>(true)

    this.menuStatus = this.menuStatusSubject.asObservable();
    this.loaderStatus = this.loaderStatusSubject.asObservable();
    this.backgroundStatus = this.backgroundStatusSubject.asObservable();
    this.renderer = rendererFactory.createRenderer(null, null);
    this.closeMenuOnNavigation()
  }

  public get isMenuOpen(): any {
    return this.menuStatusSubject.value;
  }

  openMenu() {
    this.menuStatusSubject.next(true);
  }

  closeMenu() {
    this.menuStatusSubject.next(false);
  }

  startLoader() {
    this.loaderStatusSubject.next(true)

    setTimeout(() => {
      this.closeMenu()
    }, 1000);

    setTimeout(() => {
      this.endLoader()
    }, 3510);
  }

  endLoader() {
    this.loaderStatusSubject.next(false)
  }

  deactivateBody() {
    this.renderer.addClass(this.document.body, 'inactive');
    this.backgroundStatusSubject.next(false)

    setTimeout(() => {
      this.activateBody()
    }, 3000);
  }

  activateBody() {
    this.renderer.removeClass(this.document.body, 'inactive');
    this.backgroundStatusSubject.next(true)
  }

  private closeMenuOnNavigation() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.deactivateBody()
        this.startLoader()
      }

      if (val instanceof NavigationEnd) {
        setTimeout(() => {
          this.closeMenu()
        }, 500);
      }
    });
  }
}