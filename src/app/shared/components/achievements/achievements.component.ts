import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  list: any[] = [1, 2, 3, 4]

  constructor() { }

  ngOnInit(): void {
  }

}
