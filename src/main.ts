import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MenuComponent } from './app/components/menu.component'

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
    <h3>Teste 2</h3>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
bootstrapApplication(MenuComponent);
