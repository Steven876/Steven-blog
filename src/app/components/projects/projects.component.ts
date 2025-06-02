import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

interface Comment {
  name: string;
  email: string;
  message: string;
  date: Date;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./projects.component.css'],
  templateUrl: './projects.component.html',


})


export class ProjectsComponent implements OnInit {


  projects: Project[] = [];
  comments: Comment[] = [];
  
  commentForm!: FormGroup;


  get nameControl() { return this.commentForm.get('name'); }
  get emailControl() { return this.commentForm.get('email'); }
  get messageControl() { return this.commentForm.get('message'); }


  constructor(

    private projectService: ProjectService,
    private fb: FormBuilder
  
  ) {}

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
    
    this.comments = [];
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
      this.commentForm.reset();
    
    }
  
  
  }

}