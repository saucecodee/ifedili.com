import { Component, OnInit } from '@angular/core';
import { features } from 'src/app/core/data';
import { IFeature } from 'src/app/core/models';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  list: IFeature[] = features

  constructor() { }

  ngOnInit(): void {
  }

}
