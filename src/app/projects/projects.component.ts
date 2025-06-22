import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="text-primary animate-on-scroll">Featured Projects</h1>
        <h3 class="h4 text-muted">Our Work</h3>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3" *ngFor="let project of projects; let i = index">
          <div class="card border-0 shadow-sm project-card animate-on-scroll" [style.animation-delay]="i * 0.1 + 's'">
            <div class="project-image-container">
              <img [src]="project.image" class="card-img-top" [alt]="project.title">
              <div class="project-overlay">
                <h6 class="text-white">{{project.title}}</h6>
                <p class="text-white small">{{project.description}}</p>
                <span class="badge bg-primary">{{project.category}}</span>
              </div>
            </div>
            <div class="card-body">
              <h6 class="card-title">{{project.title}}</h6>
              <p class="card-text small">{{project.description}}</p>
              <div class="project-meta">
                <small class="text-muted">{{project.location}}</small>
                <small class="text-muted">{{project.year}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    
    .project-card {
      transition: all 0.3s ease;
      cursor: pointer;
      border-radius: 15px;
      overflow: hidden;
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 51, 102, 0.15) !important;
    }
    
    .project-image-container {
      position: relative;
      overflow: hidden;
      height: 200px;
    }
    
    .project-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .project-card:hover .project-image-container img {
      transform: scale(1.1);
    }
    
    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 51, 102, 0.8);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      padding: 1rem;
      text-align: center;
    }
    
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .project-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
    }
    
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    
    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .badge {
      margin-top: 0.5rem;
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Project Wave',
      description: 'Modern infrastructure development with sustainable design principles.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center',
      category: 'Infrastructure',
      location: 'Dubai, UAE',
      year: '2024'
    },
    {
      title: 'Bahr El Baqr',
      description: 'Large-scale wastewater treatment facility serving millions.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center',
      category: 'Water',
      location: 'Egypt',
      year: '2023'
    },
    {
      title: 'High-Speed Rail',
      description: 'State-of-the-art transportation network connecting major cities.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
      category: 'Transportation',
      location: 'Saudi Arabia',
      year: '2024'
    },
    {
      title: 'Grand Museum',
      description: 'Cultural landmark showcasing architectural excellence.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center',
      category: 'Cultural',
      location: 'Cairo, Egypt',
      year: '2023'
    },
    {
      title: 'Monorail System',
      description: 'Urban transportation solution for modern cities.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center',
      category: 'Transportation',
      location: 'Egypt',
      year: '2024'
    },
    {
      title: 'Metro Extension',
      description: 'Expanding public transportation infrastructure.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center',
      category: 'Transportation',
      location: 'Cairo, Egypt',
      year: '2023'
    },
    {
      title: 'Power Plant',
      description: 'Renewable energy facility supporting sustainable development.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center',
      category: 'Energy',
      location: 'Saudi Arabia',
      year: '2024'
    },
    {
      title: 'University Campus',
      description: 'Educational facility promoting academic excellence.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center',
      category: 'Education',
      location: 'Cairo, Egypt',
      year: '2023'
    }
  ];

  ngOnInit() {
    this.observeElements();
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }
} 