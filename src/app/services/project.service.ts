import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: "Personal Blog Website",
      date: "October 2024",

      shortDescription:
        "Designed and developed a personal blog website to document my journey towards becoming a software engineer.",

      fullDescription:
        "Designed and developed a personal blog website to document my journey towards becoming a software engineer.",

      idea: "I wanted to create a platform where I could share my learning journey, showcase my projects, and connect with other developers. This blog serves as both a portfolio and a personal documentation of my growth as a software developer.",

      features: [
        "Displays tools and resources that helped me to progress and develop skills achieved along the way",
        "Integrated a detailed 'About Me' section showcasing personal background, experiences, and developments",
        "Clean and responsive design that works across all devices",
        "Interactive project showcase with detailed information",
      ],
    },

    {
      id: 2,
      title: "Steve's Cooking Gas",
      date: "April 2024",

      shortDescription:
        "Designed and developed a user-friendly website for a local business, enabling customers to order and purchase cooking gas online.",

      fullDescription:
        "Designed and developed a user-friendly website for a local business, enabling customers to order and purchase cooking gas online.",

      idea: "I noticed that many local cooking gas suppliers lacked an online presence, making it difficult for customers to place orders without calling or visiting in person. I wanted to create a simple but effective e-commerce solution to bridge this gap.",

      features: [
        "Implemented a multi-role login system, allowing both customers and admins to access tailored features",
        "Integrated secure authentication methods to ensure data protection and enhance user privacy",
        "Easy ordering system with real-time inventory updates",
        "Admin dashboard for managing orders and inventory",
      ],
    },

    {
      id: 3,
      title: "BM's Car Rental Site",
      date: "November 2023",

      shortDescription:
        "Developed a demo Car Rental site that enables users to rent cars seamlessly through an intuitive interface.",

      fullDescription:
        "Developed a demo Car Rental site that enables users to rent cars seamlessly through an intuitive interface.",

      idea: "This project was created to apply my web development skills to a real-world business scenario. I wanted to develop a car rental platform that would be simple to use yet comprehensive in its features.",

      features: [
        "Implemented an admin dashboard feature to notify personnel when a user completes a car rental",
        "Showcased front-end and back-end web development skills while applying user interaction design principles",
        "Interactive car browsing and selection interface",
        "Booking management system with date and time selection",
      ],
    },

    {
      id: 4,
      title: "Tic Tac Toe Game",
      date: "September 2023",

      shortDescription:
        "Developed a multi-player Tic Tac Toe game using Python, allowing multiple players to engage in real-time.",
      fullDescription:
        "Developed a multi-player Tic Tac Toe game using Python, allowing multiple players to engage in real-time.",

      idea: "This was one of my earlier projects where I wanted to apply my programming knowledge to create a simple but functional game. It served as a great learning experience in game logic implementation and user interaction design.",

      features: [
        "Implemented a score tracking system to record and display player scores after each game",
        "Clean, intuitive user interface for game play",
        "Support for multiple game sessions",
        "Real-time game state updates",
      ],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(count: number = 3): Project[] {
    return this.projects.slice(0, count);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}
