import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { projects } from 'src/app/core/data';
import { Category, IProject } from 'src/app/core/models';

@Component({
  selector: 'app-featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {
  @Input() projects: { [id: string]: IProject } = projects
  @Input() isFeatured: boolean = false
  @Input() categorySubject!: Subject<Category>;

  category!: Category
  list: IProject[] = []

  constructor() { }

  ngOnInit(): void {
    if (!this.categorySubject) {
      this.getProjects()
    } else {
      this.categorySubject.subscribe((category: Category) => {
        this.category = category
        this.getProjects(category)
      })
    }
  }

  getProjects(category: Category | null = null) {
    category = category ? category : this.category
    this.list = []
    for (const key in this.projects) {
      const project = this.projects[key]
      let willDisplay = true

      if (this.isFeatured == true && project.isFeatured != true) willDisplay = false
      if (category != null && !project.categories.includes(category)) willDisplay = false

      if (willDisplay) this.list.push(project)
    }
  }
}