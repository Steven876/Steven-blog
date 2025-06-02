import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

interface Comment {
    name: string;
    email: string;
    message: string;
    date: Date;
}

@Component({

    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    styleUrls: ['./projects.component.css'],
    templateUrl: './projects.component.html',
})


export class ProjectsComponent implements OnInit {


  projects: Project[] = [];
  comments: Comment[] = [];
  commentForm!: FormGroup;
  searchQuery: string = '';
  availableTags: string[] = ['Angular', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'JavaScript', 'Python', 'Web Development', 'E-commerce', 'Game Development'];
  selectedTag: string | null = null;


  get nameControl() { return this.commentForm.get('name'); }
  get emailControl() { return this.commentForm.get('email'); }
  
  get messageControl() { return this.commentForm.get('message'); }

  
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private title: Title,
    private meta: Meta


  ) {


    this.title.setTitle("Steven Armstrong's Projects - Tech Portfolio");
    this.meta.addTags([
        { name: 'description', content: 'Explore Steven Armstrong\'s software development projects, featuring Angular, Spring Boot, and more.' },
        { name: 'keywords', content: 'software projects, Angular, Spring Boot, tech portfolio, UTECH' }
    
      ]);


    }

  
    ngOnInit(): void {

    this.projects = this.projectService.getProjects();

    this.initForm();

    this.loadComments();

  }

  
  initForm(): void {

    this.commentForm = this.fb.group({

      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]

    });
  }

  
  loadComments(): void {
  
    this.comments = JSON.parse(localStorage.getItem('comments') || '[]');
  
  }

  
  submitComment(): void {


      if (this.commentForm.valid) {

          const newComment: Comment = {


              name: this.commentForm.value.name,
              email: this.commentForm.value.email,
              message: this.commentForm.value.message,
              date: new Date()


          };


          this.comments.unshift(newComment);
          localStorage.setItem('comments', JSON.stringify(this.comments));
          
          this.commentForm.reset();
      }

  }

  // filterByTag(tag: string): void {
  //     this.selectedTag = this.selectedTag === tag ? null : tag;
  //     this.projects = this.projectService.getProjects().filter(project =>
  //         !this.selectedTag || project.tags.includes(this.selectedTag)
  //     );
  // }

  searchProjects(): Project[] {

    
      return this.projects.filter(project =>
          project.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          project.shortDescription.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
  }
}