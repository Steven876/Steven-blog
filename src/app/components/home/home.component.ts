import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({

  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',

})



export class HomeComponent implements OnInit {


  featuredProjects: Project[] = [];

  
  constructor(private projectService: ProjectService) {}

  
  ngOnInit(): void {


    this.featuredProjects = this.projectService.getFeaturedProjects(3);

  }

  
}