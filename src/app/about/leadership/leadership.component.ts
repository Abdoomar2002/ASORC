import { Component } from '@angular/core';

@Component({
  selector: 'app-leadership',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Leadership</h1>
      <p>Our visionary leadership inspiring, developing and leading towards excellence.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Leadership" class="img-fluid rounded shadow" alt="Leadership">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class LeadershipComponent {} 