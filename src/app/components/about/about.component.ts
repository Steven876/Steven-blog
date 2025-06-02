import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({

  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html',


})


export class AboutComponent {


  skills: string[] = [
    

    'HTML/CSS', 
    'C & C++', 
    'SQL', 
    'JavaScript', 
    'Java', 
    'Git', 
    'GitHub', 
    'Python', 
    'Angular', 
    'VS Code'


  ];

}