import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Careers</h1>
      <p>Join our team and be part of a leading global engineering and construction contractor.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Careers" class="img-fluid rounded shadow" alt="Careers">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class CareersComponent {} 