import { Component } from '@angular/core';

@Component({
  selector: 'app-environment',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Environment</h1>
      <p>We are committed to being an environmental steward by implementing the best technology available to minimize our environmental footprint.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Environment" class="img-fluid rounded shadow" alt="Environment">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class EnvironmentComponent {} 