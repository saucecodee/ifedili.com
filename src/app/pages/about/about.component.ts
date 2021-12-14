import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FeatureType, ToolType } from 'src/app/core/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  toolsSubject: Subject<ToolType> = new Subject()
  featuresSubject: Subject<FeatureType> = new Subject()

  toolTab: ToolType = "Languages"
  featTab: FeatureType = "Award"

  constructor() { }

  ngAfterViewInit(): void {
    this.switchToolTab(this.toolTab)
    this.switchFeatureTab(this.featTab)
  }

  switchToolTab(toolTab: ToolType) {
    this.toolsSubject.next(toolTab)
    this.toolTab = toolTab
  }

  switchFeatureTab(featTab: FeatureType) {
    this.featuresSubject.next(featTab)
    this.featTab = featTab
  }

}
