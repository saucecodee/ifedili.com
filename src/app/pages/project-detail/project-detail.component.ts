import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { projects } from 'src/app/core/data';
import { IProject } from 'src/app/core/models';
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectDetailComponent implements OnInit {
  id: string;
  project!: IProject;
  isValidProject: boolean = false

  constructor(private actRoute: ActivatedRoute) {
    this.id = this.actRoute.snapshot.params.project_id;
    if (projects[this.id]) {
      this.project = projects[this.id]
      this.isValidProject = true
    }
  }

  ngOnInit(): void { }

}
