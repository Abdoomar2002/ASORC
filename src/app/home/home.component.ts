import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero Section with Parallax Effect -->
    <section class="hero-section text-white text-center py-5">
      <div class="hero-background"></div>
      <div class="container position-relative">
        <div class="row align-items-center min-vh-75">
          <div class="col-lg-8 mx-auto">
            <h1 class="display-3 fw-bold mb-4 animate-fade-in">ASORC Construction</h1>
            <p class="lead mb-4 animate-fade-in-delay">Leading global engineering and construction contractor transforming landscapes and empowering communities.</p>
            <a routerLink="/about" class="btn btn-light btn-lg px-4 animate-fade-in-delay-2">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="text-primary mb-4 animate-on-scroll">Who We Are</h2>
            <h3 class="h4 mb-3">At a Glance</h3>
            <p class="lead">ASORC Construction PLC is a leading global engineering and construction contractor primarily focused on infrastructure, industrial and high-end commercial projects in the Middle East, Africa, and the United States.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <a routerLink="/about" class="btn btn-primary animate-on-scroll">Explore</a>
          </div>
          <div class="col-lg-6">
            <div class="image-container animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&crop=center" class="img-fluid rounded shadow-lg" alt="About ASORC">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-primary animate-on-scroll">What We Do</h2>
          <h3 class="h4 text-muted">Our Services</h3>
        </div>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let service of services; let i = index">
            <div class="card h-100 border-0 shadow-sm service-card animate-on-scroll" [style.animation-delay]="i * 0.1 + 's'">
              <div class="card-image-container">
                <img [src]="service.image" class="card-img-top" [alt]="service.title">
                <div class="card-overlay">
                  <a [routerLink]="service.link" class="btn btn-light">Learn More</a>
                </div>
              </div>
              <div class="card-body text-center">
                <h5 class="card-title text-primary">{{service.title}}</h5>
                <p class="card-text">{{service.description}}</p>
                <a [routerLink]="service.link" class="btn btn-outline-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-primary animate-on-scroll">Featured Projects</h2>
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
                </div>
              </div>
              <div class="card-body">
                <h6 class="card-title">{{project.title}}</h6>
                <p class="card-text small">{{project.description}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a routerLink="/projects" class="btn btn-primary animate-on-scroll">View All Projects</a>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-primary animate-on-scroll">Newsroom</h2>
          <h3 class="h4 text-muted">Our Latest Updates</h3>
        </div>
        <div class="row g-4">
          <div class="col-md-4" *ngFor="let news of newsItems; let i = index">
            <div class="card border-0 shadow-sm h-100 news-card animate-on-scroll" [style.animation-delay]="i * 0.1 + 's'">
              <div class="news-image-container">
                <img [src]="news.image" class="card-img-top" [alt]="news.title">
                <div class="news-date-badge">
                  <span class="badge bg-primary">{{news.date}}</span>
                </div>
              </div>
              <div class="card-body">
                <h6 class="card-title mt-2">{{news.title}}</h6>
                <p class="card-text small">{{news.description}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a routerLink="/newsroom" class="btn btn-primary animate-on-scroll">Explore Newsroom</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hero Section */
    .hero-section {
      background: linear-gradient(135deg, #003366 0%, #0056b3 100%);
      min-height: 75vh;
      position: relative;
      overflow: hidden;
    }
    
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center') center/cover;
      opacity: 0.1;
      z-index: 1;
    }
    
    .hero-section .container {
      position: relative;
      z-index: 2;
    }
    
    .min-vh-75 {
      min-height: 75vh;
    }
    
    /* Animations */
    .animate-fade-in {
      animation: fadeIn 1s ease-in;
    }
    
    .animate-fade-in-delay {
      animation: fadeIn 1s ease-in 0.3s both;
    }
    
    .animate-fade-in-delay-2 {
      animation: fadeIn 1s ease-in 0.6s both;
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
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Cards */
    .service-card, .project-card, .news-card {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .service-card:hover, .project-card:hover, .news-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 51, 102, 0.1) !important;
    }
    
    /* Image Containers */
    .image-container {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
    }
    
    .image-container img {
      transition: transform 0.3s ease;
    }
    
    .image-container:hover img {
      transform: scale(1.05);
    }
    
    .card-image-container, .project-image-container, .news-image-container {
      position: relative;
      overflow: hidden;
      height: 200px;
    }
    
    .card-image-container img, .project-image-container img, .news-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .service-card:hover .card-image-container img,
    .project-card:hover .project-image-container img,
    .news-card:hover .news-image-container img {
      transform: scale(1.1);
    }
    
    /* Overlays */
    .card-overlay, .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 51, 102, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .service-card:hover .card-overlay,
    .project-card:hover .project-overlay {
      opacity: 1;
    }
    
    .news-date-badge {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    
    /* Colors */
    .text-primary {
      color: #003366 !important;
    }
    
    .btn-primary {
      background-color: #003366;
      border-color: #003366;
      transition: all 0.3s ease;
    }
    
    .btn-primary:hover {
      background-color: #002244;
      border-color: #002244;
      transform: translateY(-2px);
    }
    
    .btn-outline-primary {
      color: #003366;
      border-color: #003366;
      transition: all 0.3s ease;
    }
    
    .btn-outline-primary:hover {
      background-color: #003366;
      border-color: #003366;
      transform: translateY(-2px);
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero-section {
        min-height: 60vh;
      }
      
      .display-3 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class HomeComponent {
  services = [
    {
      title: 'Construction',
      description: 'A leading global construction group concentrating on infrastructure projects worldwide.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center',
      link: '/services/construction'
    },
    {
      title: 'Concessions & Investments',
      description: 'Developing and investing in infrastructure assets across various sectors.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center',
      link: '/services/concessions'
    },
    {
      title: 'O&M and Facilities Management',
      description: 'A track record in Operations & Maintenance & high quality property management.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center',
      link: '/services/om-facilities'
    }
  ];

  projects = [
    {
      title: 'Project Wave',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center'
    },
    {
      title: 'Bahr El Baqr',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center'
    },
    {
      title: 'High-Speed Rail',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center'
    },
    {
      title: 'Grand Museum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center'
    }
  ];

  newsItems = [
    {
      title: 'ASORC Reports Backlog of USD 8.7 Billion',
      date: '28 May, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center'
    },
    {
      title: 'Wind Farm Operations Begin 6 Months Ahead',
      date: '15 April, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center'
    },
    {
      title: 'Revenue of USD 3.3 Billion in FY 2024',
      date: '26 March, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center'
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