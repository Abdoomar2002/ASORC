import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Community Engagement</h1>
      <p>Growing operations means growing responsibilities, which is why we make sure that our social and economic contributions remain active.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Community" class="img-fluid rounded shadow" alt="Community">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class CommunityComponent {} 