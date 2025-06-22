import { Component } from '@angular/core';

@Component({
  selector: 'app-om-facilities',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">O&M and Facilities Management</h1>
      <p>A track record in Operations & Maintenance & high quality property management.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=O%26M+Facilities" class="img-fluid rounded shadow" alt="O&M Facilities">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class OMFacilitiesComponent {} 