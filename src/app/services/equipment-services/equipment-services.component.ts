import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment-services',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Equipment Services</h1>
      <p>Comprehensive equipment services to support our construction and infrastructure projects.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Equipment+Services" class="img-fluid rounded shadow" alt="Equipment Services">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class EquipmentServicesComponent {} 