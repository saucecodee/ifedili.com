import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false

  constructor(
    private navService: NavigationService
  ) {
    this.navService.menuStatus.subscribe(result => this.isMenuOpen = result);
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen ? this.navService.closeMenu() : this.navService.openMenu()
  }
}
