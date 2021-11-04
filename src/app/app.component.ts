import { Component } from '@angular/core';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: boolean = false
  isMenuOpen: boolean = false
  isActiveBackground: boolean = true

  constructor(
    private navService: NavigationService,
  ) {
    this.navService.loaderStatus.subscribe(result => this.isLoading = result);

    this.navService.menuStatus.subscribe(result => this.isMenuOpen = result);

    this.navService.backgroundStatus.subscribe(result => this.isActiveBackground = result);
  }
}
