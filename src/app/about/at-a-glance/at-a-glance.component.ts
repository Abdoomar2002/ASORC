import { Component } from '@angular/core';

@Component({
  selector: 'app-at-a-glance',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">At a Glance</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=At+a+Glance" class="img-fluid rounded shadow" alt="At a Glance">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class AtAGlanceComponent {} 