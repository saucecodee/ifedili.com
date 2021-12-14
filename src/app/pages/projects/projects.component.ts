import { AfterViewInit, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { projectCategories } from 'src/app/core/data';
import { Category, ICategory } from 'src/app/core/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  categorySubject: Subject<Category> = new Subject()
  category: Category = "Project"

  projectCategories: { [id: string]: ICategory } = projectCategories

  constructor() { }

  ngAfterViewInit() {
    this.switchTab(this.category)
  }

  switchTab(category: Category) {
    this.categorySubject.next(category)
    this.category = category
  }

}
