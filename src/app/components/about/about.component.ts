import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

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

  constructor(private title: Title, private meta: Meta) {


  this.title.setTitle("About Steven Armstrong - Computer Science Student");


  this.meta.addTags([


      {
          name: 'description',
          content: 'Learn about Steven Armstrong, a Computer Science student at UTECH Jamaica, passionate about software development and AI/ML.'
      },
      
      { name: 'keywords', content: 'Steven Armstrong, Computer Science, software developer, UTECH, web development, AI' }
  
  
    ]);

  }


}