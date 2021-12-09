import { Component, Input, OnInit } from '@angular/core';
import { projects } from 'src/app/core/data';
import { Category, IProject } from 'src/app/core/models';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {
  @Input() projects: { [id: string]: IProject } = projects
  @Input() isFeatured: boolean | null = null
  @Input() category: Category | null = null

  list: IProject[] = []

  constructor() {
    this.getProjects()
  }

  ngOnInit(): void { }

  getProjects() {
    for (const key in this.projects) {
      const project = this.projects[key]
      let willDisplay = true

      if (this.isFeatured == true && project.isFeatured != true) willDisplay = false
      if (this.category != null && !project.categories.includes(this.category)) willDisplay = false

      if (willDisplay) this.list.push(project)
    }
  }
}