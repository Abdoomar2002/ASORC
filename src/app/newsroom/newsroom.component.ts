import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsroom',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="text-primary animate-on-scroll">Newsroom</h1>
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
              <div class="news-overlay">
                <div class="news-category">{{news.category}}</div>
              </div>
            </div>
            <div class="card-body">
              <h6 class="card-title mt-2">{{news.title}}</h6>
              <p class="card-text small">{{news.description}}</p>
              <div class="news-meta">
                <small class="text-muted">{{news.readTime}} min read</small>
                <small class="text-muted">{{news.author}}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    
    .news-card {
      transition: all 0.3s ease;
      cursor: pointer;
      border-radius: 15px;
      overflow: hidden;
    }
    
    .news-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 51, 102, 0.15) !important;
    }
    
    .news-image-container {
      position: relative;
      overflow: hidden;
      height: 200px;
    }
    
    .news-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .news-card:hover .news-image-container img {
      transform: scale(1.1);
    }
    
    .news-date-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 2;
    }
    
    .news-overlay {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 2;
    }
    
    .news-category {
      background: rgba(0, 51, 102, 0.8);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .news-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid #eee;
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
      font-size: 0.75rem;
    }
  `]
})
export class NewsroomComponent implements OnInit {
  newsItems = [
    {
      title: 'ASORC Reports Backlog of USD 8.7 Billion',
      date: '28 May, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center',
      category: 'Financial',
      readTime: '3',
      author: 'ASORC Team'
    },
    {
      title: 'Wind Farm Operations Begin 6 Months Ahead',
      date: '15 April, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center',
      category: 'Energy',
      readTime: '4',
      author: 'Engineering Team'
    },
    {
      title: 'Revenue of USD 3.3 Billion in FY 2024',
      date: '26 March, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center',
      category: 'Financial',
      readTime: '2',
      author: 'Finance Team'
    },
    {
      title: 'Power Plant Expansion in Saudi Arabia',
      date: '24 March, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop&crop=center',
      category: 'Projects',
      readTime: '5',
      author: 'Project Team'
    },
    {
      title: 'University Campus Expansion Project',
      date: '24 February, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center',
      category: 'Education',
      readTime: '3',
      author: 'Construction Team'
    },
    {
      title: 'Wind Farm Achieves Financial Milestones',
      date: '09 January, 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center',
      category: 'Energy',
      readTime: '4',
      author: 'Energy Team'
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