import { Component, OnInit } from '@angular/core';
import {experiences}  from 'src/app/core/data';
import { IExperience } from 'src/app/core/models';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  list: IExperience[] = experiences

  constructor() { }

  ngOnInit(): void {
  }

}
