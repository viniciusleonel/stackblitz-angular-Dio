import { Component } from '@angular/core';

@Component({
  selector: 'my-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.css' ]
})

export class Button {
  buttonText: string = 'Acessar';
}