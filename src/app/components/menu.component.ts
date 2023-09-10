import { Component } from '@angular/core';

@Component({
  selector: 'menu-component',
  standalone: true,
  template: '<h2>Vinícius</h2>',
  styles: ['h2 { color: blue }']
})

export class MenuComponent{}

// import 'zone.js/dist/zone';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { bootstrapApplication } from '@angular/platform-browser';

// @Component({
//   selector: 'menu-component',
//   standalone: true,
//   imports: [CommonModule],
//   template: '<h2>Vinicius</h2>',
// })
// export class MenuComponent {}

