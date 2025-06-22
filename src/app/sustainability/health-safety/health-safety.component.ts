import { Component } from '@angular/core';

@Component({
  selector: 'app-health-safety',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Health & Safety</h1>
      <p>We are responsible for the safety of our employees and are fully committed to providing a safe and unpolluted working environment.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Health+Safety" class="img-fluid rounded shadow" alt="Health & Safety">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class HealthSafetyComponent {} 