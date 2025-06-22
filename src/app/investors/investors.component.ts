import { Component } from '@angular/core';

@Component({
  selector: 'app-investors',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Investors</h1>
      <p>Information for our investors and shareholders about our financial performance and strategy.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Investors" class="img-fluid rounded shadow" alt="Investors">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class InvestorsComponent {} 