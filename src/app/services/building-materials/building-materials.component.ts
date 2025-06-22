import { Component } from '@angular/core';

@Component({
  selector: 'app-building-materials',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Building Materials</h1>
      <p>A vast portfolio of construction materials and investment companies complement our core activities.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Building+Materials" class="img-fluid rounded shadow" alt="Building Materials">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class BuildingMaterialsComponent {} 