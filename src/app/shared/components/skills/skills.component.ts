import { Component, OnInit } from '@angular/core';
import { tools } from 'src/app/core/data';
import { ITool } from 'src/app/core/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  list: { [id: string]: ITool } = tools

  constructor() {}

  ngOnInit(): void { }

}
