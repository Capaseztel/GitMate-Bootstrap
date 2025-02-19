import {Component} from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  constructor() {
    document.body.style.backgroundColor = '#1f1f1f';
  }
}
