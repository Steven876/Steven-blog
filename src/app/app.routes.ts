import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';



export const routes: Routes = [


  {path: '', component: HomeComponent, title: 'Home - Steven\'s Programming Journey'},

  { path: 'projects', component: ProjectsComponent, title: 'Projects - Steven\'s Programming Journey' },

  { path: 'about', component: AboutComponent, title: 'About Me - Steven\'s Programming Journey' },

  { path: 'contact', component: ContactComponent, title: 'Contact - Steven\'s Programming Journey' },
  
  { path: '**', redirectTo: ''}

  
];