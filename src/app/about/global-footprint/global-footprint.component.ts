import { Component } from '@angular/core';

@Component({
  selector: 'app-global-footprint',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Global Footprint</h1>
      <p>A comprehensive global footprint through our main subsidiaries and operations worldwide.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Global+Footprint" class="img-fluid rounded shadow" alt="Global Footprint">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class GlobalFootprintComponent {} 