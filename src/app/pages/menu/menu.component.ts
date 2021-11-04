import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMenuOpen: boolean = false

  constructor(
    private navService: NavigationService
  ) {
    this.navService.menuStatus.subscribe(result => { this.isMenuOpen = result });
  }

  ngOnInit(): void {
  }

}
