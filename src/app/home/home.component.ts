import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="hero-section text-white text-center py-5">
      <div class="container">
        <div class="row align-items-center min-vh-75">
          <div class="col-lg-8 mx-auto">
            <h1 class="display-3 fw-bold mb-4">ASORC Construction</h1>
            <p class="lead mb-4">Leading global engineering and construction contractor transforming landscapes and empowering communities.</p>
            <a routerLink="/about" class="btn btn-light btn-lg px-4">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="text-primary mb-4">Who We Are</h2>
            <h3 class="h4 mb-3">At a Glance</h3>
            <p class="lead">ASORC Construction PLC is a leading global engineering and construction contractor primarily focused on infrastructure, industrial and high-end commercial projects in the Middle East, Africa, and the United States.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <a routerLink="/about" class="btn btn-primary">Explore</a>
          </div>
          <div class="col-lg-6">
            <img src="https://via.placeholder.com/600x400/003366/ffffff?text=About+ASORC" class="img-fluid rounded shadow" alt="About ASORC">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-primary">What We Do</h2>
          <h3 class="h4 text-muted">Our Services</h3>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <img src="https://via.placeholder.com/400x250/003366/ffffff?text=Construction" class="card-img-top" alt="Construction">
              <div class="card-body text-center">
                <h5 class="card-title text-primary">Construction</h5>
                <p class="card-text">A leading global construction group concentrating on infrastructure projects worldwide.</p>
                <a routerLink="/services/construction" class="btn btn-outline-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <img src="https://via.placeholder.com/400x250/003366/ffffff?text=Concessions" class="card-img-top" alt="Concessions">
              <div class="card-body text-center">
                <h5 class="card-title text-primary">Concessions & Investments</h5>
                <p class="card-text">Developing and investing in infrastructure assets across various sectors.</p>
                <a routerLink="/services/concessions" class="btn btn-outline-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <img src="https://via.placeholder.com/400x250/003366/ffffff?text=O%26M" class="card-img-top" alt="O&M">
              <div class="card-body text-center">
                <h5 class="card-title text-primary">O&M and Facilities Management</h5>
                <p class="card-text">A track record in Operations & Maintenance & high quality property management.</p>
                <a routerLink="/services/om-facilities" class="btn btn-outline-primary">Learn More</a>
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
          <h2 class="text-primary">Featured Projects</h2>
          <h3 class="h4 text-muted">Our Work</h3>
        </div>
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm">
              <img src="https://via.placeholder.com/300x200/003366/ffffff?text=Project+1" class="card-img-top" alt="Project 1">
              <div class="card-body">
                <h6 class="card-title">Project Wave</h6>
                <p class="card-text small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm">
              <img src="https://via.placeholder.com/300x200/003366/ffffff?text=Project+2" class="card-img-top" alt="Project 2">
              <div class="card-body">
                <h6 class="card-title">Bahr El Baqr</h6>
                <p class="card-text small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm">
              <img src="https://via.placeholder.com/300x200/003366/ffffff?text=Project+3" class="card-img-top" alt="Project 3">
              <div class="card-body">
                <h6 class="card-title">High-Speed Rail</h6>
                <p class="card-text small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm">
              <img src="https://via.placeholder.com/300x200/003366/ffffff?text=Project+4" class="card-img-top" alt="Project 4">
              <div class="card-body">
                <h6 class="card-title">Grand Museum</h6>
                <p class="card-text small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a routerLink="/projects" class="btn btn-primary">View All Projects</a>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="text-primary">Newsroom</h2>
          <h3 class="h4 text-muted">Our Latest Updates</h3>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <img src="https://via.placeholder.com/400x250/003366/ffffff?text=News+1" class="card-img-top" alt="News 1">
              <div class="card-body">
                <small class="text-muted">28 May, 2025</small>
                <h6 class="card-title mt-2">ASORC Reports Backlog of USD 8.7 Billion</h6>
                <p class="card-text small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <img src="https://via.placeholder.com/400x250/003366/ffffff?text=News+2" class="card-img-top" alt="News 2">
              <div class="card-body">
                <small class="text-muted">15 April, 2025</small>
                <h6 class="card-title mt-2">Wind Farm Operations Begin 6 Months Ahead</h6>
                <p class="card-text small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card border-0 shadow-sm h-100">
              <img src="https://via.placeholder.com/400x250/003366/ffffff?text=News+3" class="card-img-top" alt="News 3">
              <div class="card-body">
                <small class="text-muted">26 March, 2025</small>
                <h6 class="card-title mt-2">Revenue of USD 3.3 Billion in FY 2024</h6>
                <p class="card-text small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a routerLink="/newsroom" class="btn btn-primary">Explore Newsroom</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #003366 0%, #0056b3 100%);
      min-height: 75vh;
    }
    
    .min-vh-75 {
      min-height: 75vh;
    }
    
    .text-primary {
      color: #003366 !important;
    }
    
    .btn-primary {
      background-color: #003366;
      border-color: #003366;
    }
    
    .btn-primary:hover {
      background-color: #002244;
      border-color: #002244;
    }
    
    .btn-outline-primary {
      color: #003366;
      border-color: #003366;
    }
    
    .btn-outline-primary:hover {
      background-color: #003366;
      border-color: #003366;
    }
    
    .card {
      transition: transform 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
  `]
})
export class HomeComponent {} 