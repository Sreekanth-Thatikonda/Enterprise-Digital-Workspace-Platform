import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
      <p class="text-gray-600">Welcome to the dashboard module!</p>
    </div>
  `,
  standalone: false
})
export class DashboardComponent {}
