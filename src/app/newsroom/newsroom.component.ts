import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsroom',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="text-primary">Newsroom</h1>
        <h3 class="h4 text-muted">Our Latest Updates</h3>
      </div>
      <div class="row g-4">
        <div class="col-md-4" *ngFor="let news of newsItems">
          <div class="card border-0 shadow-sm h-100">
            <img [src]="news.image" class="card-img-top" [alt]="news.title">
            <div class="card-body">
              <small class="text-muted">{{news.date}}</small>
              <h6 class="card-title mt-2">{{news.title}}</h6>
              <p class="card-text small">{{news.description}}</p>
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
export class NewsroomComponent {
  newsItems = [
    { title: 'ASORC Reports Backlog of USD 8.7 Billion', date: '28 May, 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://via.placeholder.com/400x250/003366/ffffff?text=News+1' },
    { title: 'Wind Farm Operations Begin 6 Months Ahead', date: '15 April, 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://via.placeholder.com/400x250/003366/ffffff?text=News+2' },
    { title: 'Revenue of USD 3.3 Billion in FY 2024', date: '26 March, 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://via.placeholder.com/400x250/003366/ffffff?text=News+3' },
    { title: 'Power Plant Expansion in Saudi Arabia', date: '24 March, 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://via.placeholder.com/400x250/003366/ffffff?text=News+4' },
    { title: 'University Campus Expansion Project', date: '24 February, 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://via.placeholder.com/400x250/003366/ffffff?text=News+5' },
    { title: 'Wind Farm Achieves Financial Milestones', date: '09 January, 2025', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://via.placeholder.com/400x250/003366/ffffff?text=News+6' }
  ];
} 