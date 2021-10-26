import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {
  list: any[] = [1,2,3,4]
  constructor() { }

  ngOnInit(): void {
  }

}
