import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrls: ['./project-card.component.css'],
  templateUrl: './project-card.component.html',



})



export class ProjectCardComponent {


  @Input() project!: Project;

}