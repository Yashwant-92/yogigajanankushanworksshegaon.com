import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <!-- Background aura -->
    <div class="pointer-events-none fixed inset-0 -z-10 bg-brand-gradient opacity-60"></div>

    <app-header></app-header>

    <main class="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
})
export class AppComponent {}
