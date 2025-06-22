import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Brands</h1>
      <p>Encompassing a strong and well diverse expertise worldwide through our operational subsidiaries.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Brands" class="img-fluid rounded shadow" alt="Brands">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class BrandsComponent {} 