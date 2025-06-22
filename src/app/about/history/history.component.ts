import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">History</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=History" class="img-fluid rounded shadow" alt="History">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class HistoryComponent {} 