import { Component } from '@angular/core';

@Component({
  selector: 'app-construction',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Construction</h1>
      <p>A leading global construction group concentrating on infrastructure projects worldwide.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Construction" class="img-fluid rounded shadow" alt="Construction">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class ConstructionComponent {} 