import { Component } from '@angular/core';

@Component({
  selector: 'app-concessions',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Concessions & Investments</h1>
      <p>Developing and investing in infrastructure assets across various sectors.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Concessions" class="img-fluid rounded shadow" alt="Concessions">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class ConcessionsComponent {} 