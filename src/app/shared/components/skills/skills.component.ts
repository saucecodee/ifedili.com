import { Component, Input, OnInit } from '@angular/core';
import { tools } from 'src/app/core/data';
import { Category, ITool } from 'src/app/core/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: string[] = []
  @Input() category: Category | null = null

  list: ITool[] = []

  constructor() { }

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills() {
    if (this.skills.length > 0) {
      this.skills.map(skill => {
        this.list.push(tools[skill])
      })
    } else {
      for (const key in tools) {
        const tool = tools[key]
        if (this.category == null || tool.categories.includes(this.category))
          this.list.push(tool)
      }
    }
  }

}
