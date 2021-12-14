import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { tools } from 'src/app/core/data';
import { Category, ITool, ToolType } from 'src/app/core/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skills: string[] = []
  @Input() toolsSubject!: Subject<ToolType>;

  category!: ToolType
  list: ITool[] = []

  constructor() { }

  ngOnInit(): void {
    if (!this.toolsSubject) {
      this.getSkills()
    } else {
      this.toolsSubject.subscribe((category: ToolType) => {
        this.category = category
        this.getSkills(category)
      })
    }
  }

  getSkills(category: ToolType | null = null) {
    category = category ? category : this.category
    this.list = []
    if (this.skills.length > 0) {
      this.skills.map(skill => {
        this.list.push(tools[skill])
      })
    } else {
      for (const key in tools) {
        const tool = tools[key]
        if (category == null || tool.categories.includes(category))
          this.list.push(tool)
      }
    }
  }

}
