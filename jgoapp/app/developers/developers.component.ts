import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Developer } from './models/developer';
import { DeveloperDetailComponent } from '../developer-detail.component';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'my-developers',
  templateUrl:'app/views/developer.component.html',
  styleUrls: ['app/styles/developer.component.css'],
  directives: [DeveloperDetailComponent],
})
export class DevelopersComponent implements OnInit {
  developers: Developer[];
  selectedDeveloper: Developer;

  constructor(
  private router: Router,
  private developerService: DeveloperService) { }

  getDevelopers() {
    this.developerService.getDevelopers().then(developers => this.developers = developers);
  }

  ngOnInit() {
    this.getDevelopers();
  }

  onSelect(developer: Developer) { this.selectedDeveloper = developer; }

  gotoDetail(){ 

  }
}
