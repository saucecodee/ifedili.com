import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { features } from 'src/app/core/data';
import { FeatureType, IFeature } from 'src/app/core/models';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  @Input() featuresSubject!: Subject<FeatureType>;

  category: FeatureType = "Award"
  list: IFeature[] = []

  constructor() { }

  ngOnInit(): void {
    if (!this.featuresSubject) {
      this.getFeatures()
    } else {
      this.featuresSubject.subscribe((category: FeatureType) => {
        this.category = category
        this.getFeatures(category)
      })
    }
  }

  getFeatures(category: FeatureType | null = null) {
    category = category ? category : this.category
    this.list = []
    features.map(feat => {
      if (feat.type == category) this.list.push(feat)
    })
  }

}
