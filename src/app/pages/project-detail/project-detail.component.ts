import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from 'src/app/core/data';
import { IProject } from 'src/app/core/models';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  id: string;
  project: IProject

  constructor(private actRoute: ActivatedRoute) {
    this.id = this.actRoute.snapshot.params.project_id;
    this.project =  projects[this.id]
  }

  ngOnInit(): void {
  }

}
