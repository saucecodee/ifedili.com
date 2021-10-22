import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project_id: string;

  constructor(private actRoute: ActivatedRoute) {
    this.project_id = this.actRoute.snapshot.params.project_id;
  }

  ngOnInit(): void {
  }

}
