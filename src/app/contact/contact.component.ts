import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h1 class="text-primary">Contact Us</h1>
      <p>Get in touch with us for any inquiries about our services and projects.</p>
      <img src="https://via.placeholder.com/600x300/003366/ffffff?text=Contact" class="img-fluid rounded shadow" alt="Contact">
    </div>
  `,
  styles: [`
    h1 { color: #003366; }
    .container { background: #fff; border-radius: 8px; }
  `]
})
export class ContactComponent {} 