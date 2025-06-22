import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-sites',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Safe Construction Sites</h1>
      <p>Each of our construction brands has developed stringent rules and regulations that are implemented and enforced on all projects.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Safe+Sites" class="img-fluid rounded shadow" alt="Safe Construction Sites">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class SafeSitesComponent {} 