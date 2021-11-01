import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  list: any[] = [1, 2, 3, 4, 5, 6, 7, 8]

  constructor() { }

  ngOnInit(): void {
  }

}
