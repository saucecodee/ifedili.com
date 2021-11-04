import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private menuStatusSubject: BehaviorSubject<any>;
  public menuStatus: Observable<any>

  constructor(
    private router: Router
  ) {
    this.menuStatusSubject = new BehaviorSubject<boolean>(false)
    this.menuStatus = this.menuStatusSubject.asObservable();
    // this.closeMenuOnNavigation()
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

  // private closeMenuOnNavigation() {
  //   this.router.events.subscribe((val) => {
  //     if (val instanceof NavigationEnd) {
  //       setTimeout(() => {
  //         this.closeMenu()
  //       }, 1000);
  //     }
  //   });
  // }
}