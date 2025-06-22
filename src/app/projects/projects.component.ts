import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="text-primary">Featured Projects</h1>
        <h3 class="h4 text-muted">Our Work</h3>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3" *ngFor="let project of projects">
          <div class="card border-0 shadow-sm">
            <img [src]="project.image" class="card-img-top" [alt]="project.title">
            <div class="card-body">
              <h6 class="card-title">{{project.title}}</h6>
              <p class="card-text small">{{project.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .card { transition: transform 0.3s ease; }
    .card:hover { transform: translateY(-5px); }
  `]
})
export class ProjectsComponent {
  projects = [
    { title: 'Project Wave', description: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/300x200/003366/ffffff?text=Project+Wave' },
    { title: 'Bahr El Baqr', description: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/300x200/003366/ffffff?text=Bahr+El+Baqr' },
    { title: 'High-Speed Rail', description: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/300x200/003366/ffffff?text=High+Speed+Rail' },
    { title: 'Grand Museum', description: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/300x200/003366/ffffff?text=Grand+Museum' },
    { title: 'Monorail', description: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/300x200/003366/ffffff?text=Monorail' },
    { title: 'Metro', description: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/300x200/003366/ffffff?text=Metro' },
    { title: 'Power Plant', description: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/300x200/003366/ffffff?text=Power+Plant' },
    { title: 'University', description: 'Lorem ipsum dolor sit amet', image: 'https://via.placeholder.com/300x200/003366/ffffff?text=University' }
  ];
} 