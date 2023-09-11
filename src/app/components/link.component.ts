import { Component, Input } from '@angular/core';

@Component({
  selector: 'link-component',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})

export class LinkComponent{
  linkedin: string = "https://www.linkedin.com/in/viniciuslps/";
  github: string = "https://github.com/viniciusleonel";
}