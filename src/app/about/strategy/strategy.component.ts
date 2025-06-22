import { Component } from '@angular/core';

@Component({
  selector: 'app-strategy',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Strategy</h1>
      <p>Our strategy is guided by four key pillars aimed at delivering top and bottom line shareholder value.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Strategy" class="img-fluid rounded shadow" alt="Strategy">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class StrategyComponent {} 